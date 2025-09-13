import Image from "next/image";

export default function ProfilePage() {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 12, background: "#fafafa" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          src="/profile-avatar.png" // ใส่รูปโปรไฟล์ใน public หรือเปลี่ยน path ตามต้องการ
          alt="Profile Avatar"
          width={120}
          height={120}
          style={{ borderRadius: "50%", marginBottom: 16 }}
        />
        <h2 style={{ margin: 0 }}>Kittisak S.</h2>
        <p style={{ color: "#888", margin: "8px 0 16px" }}>Web Developer</p>
        <div style={{ width: "100%" }}>
          <p><strong>Email:</strong> kittisak@email.com</p>
          <p><strong>Location:</strong> Bangkok, Thailand</p>
          <p><strong>About me:</strong> Passionate about coding and technology. Love to learn new things and build cool projects.</p>
        </div>
      </div>
    </div>
  );
}