import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { 
  createAdminToken, 
  setAdminSessionCookie, 
  removeAdminSessionCookie, 
  getAdminSession 
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { identifier, password } = await req.json();

    if (!identifier || !password) {
      return NextResponse.json(
        { success: false, message: "Username/email and password are required." },
        { status: 400 }
      );
    }

    // Find admin user by username or email
    const user = await prisma.adminUser.findFirst({
      where: {
        OR: [
          { username: identifier.toLowerCase().trim() },
          { email: identifier.toLowerCase().trim() },
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    // Verify bcrypt password hash
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await createAdminToken({
      userId: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    await setAdminSessionCookie(token);

    return NextResponse.json({
      success: true,
      message: "Authentication successful.",
      user: {
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  await removeAdminSessionCookie();
  return NextResponse.json({ success: true, message: "Logged out successfully." });
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user: session });
}
