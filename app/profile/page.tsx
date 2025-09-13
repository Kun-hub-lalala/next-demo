import Image from "next/image";

export default function ProfilePage() {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 12,
        background: "#fafafa",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Image
          src="/profile-avatar.png" // ต้องมีไฟล์นี้ใน public/
          alt="Profile Avatar"
          width={120}
          height={120}
          style={{
            borderRadius: "50%",
            marginBottom: 16,
            border: "4px solid red",
          }} // เพิ่มขอบแดง
        />
        <h2 style={{ margin: 0, color: "red" }}>Kittisak S.</h2>
        <p style={{ color: "#888", margin: "8px 0 16px" }}>Web Developer</p>

        <div style={{ width: "100%" }}>
          <p>
            <strong>Email:</strong>{" "}
            <span style={{ color: "red" }}>kittisak@email.com</span>
          </p>
          <p>
            <strong>Location:</strong> Bangkok, Thailand
          </p>
          <p>
            <strong>About me:</strong> Passionate about coding and technology.
            Love to learn new things and build cool projects.
          </p>
        </div>
      </div>
    </div>
  );
}
