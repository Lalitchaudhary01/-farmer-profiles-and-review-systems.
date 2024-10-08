const farmers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    photo:
      "https://plus.unsplash.com/photo-1622272182944-b1d3c72eb08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "rajesh.kumar@example.com",
    phone: "9876543210",
    bio: "Expert in organic rice farming with over 10 years of experience.",
  },
  {
    id: 2,
    name: "Priya Singh",
    photo:
      "https://plus.unsplash.com/photo-1502484442020-b16f574a2b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "priya.singh@example.com",
    phone: "8765432109",
    bio: "Passionate about sustainable vegetable farming.",
  },
  {
    id: 3,
    name: "Anil Sharma",
    photo:
      "https://plus.unsplash.com/photo-1574179064724-945f9efb4b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "anil.sharma@example.com",
    phone: "7654321098",
    bio: "Specializes in dairy farming and livestock management.",
  },
  {
    id: 4,
    name: "Sunita Verma",
    photo:
      "https://plus.unsplash.com/photo-1567615602741-8c8d593eec53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "sunita.verma@example.com",
    phone: "6543210987",
    bio: "Experienced in organic farming and crop rotation techniques.",
  },
  {
    id: 5,
    name: "Vikram Patil",
    photo:
      "https://plus.unsplash.com/photo-1627317157634-3d87f45845a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "vikram.patil@example.com",
    phone: "5432109876",
    bio: "Specializes in fruit cultivation and marketing.",
  },
  {
    id: 6,
    name: "Geeta Rani",
    photo:
      "https://plus.unsplash.com/photo-1598891966717-1e4eae90cba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "geeta.rani@example.com",
    phone: "4321098765",
    bio: "Expert in herbal medicine and organic crops.",
  },
  {
    id: 7,
    name: "Deepak Joshi",
    photo:
      "https://plus.unsplash.com/photo-1599594906064-40b30a4cf130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "deepak.joshi@example.com",
    phone: "3210987654",
    bio: "Focuses on precision farming techniques.",
  },
  {
    id: 8,
    name: "Rani Mehta",
    photo:
      "https://plus.unsplash.com/photo-1541163788962-5f6a15d7d5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "rani.mehta@example.com",
    phone: "2109876543",
    bio: "Experienced in greenhouse management.",
  },
  {
    id: 9,
    name: "Amit Gupta",
    photo:
      "https://plus.unsplash.com/photo-1585123582928-0f78ad5d8c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "amit.gupta@example.com",
    phone: "1098765432",
    bio: "Expert in rice and wheat production.",
  },
  {
    id: 10,
    name: "Suman Reddy",
    photo:
      "https://plus.unsplash.com/photo-1562570597-f6bc2c7219c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "suman.reddy@example.com",
    phone: "1987654321",
    bio: "Specializes in organic herbs and spices.",
  },
  {
    id: 11,
    name: "Nisha Yadav",
    photo:
      "https://plus.unsplash.com/photo-1504133607855-b8d39a7b9d62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "nisha.yadav@example.com",
    phone: "2345678901",
    bio: "Focuses on aquaponics and sustainable farming.",
  },
  {
    id: 12,
    name: "Kiran Sharma",
    photo:
      "https://plus.unsplash.com/photo-1592801211033-9cccb0370802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "kiran.sharma@example.com",
    phone: "3456789012",
    bio: "Experienced in poultry farming and egg production.",
  },
  {
    id: 13,
    name: "Sandeep Kumar",
    photo:
      "https://plus.unsplash.com/photo-1603891092726-c2bcb0a186e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "sandeep.kumar@example.com",
    phone: "4567890123",
    bio: "Expert in vineyard management and wine production.",
  },
  {
    id: 14,
    name: "Meena Patel",
    photo:
      "https://plus.unsplash.com/photo-1503260117885-7e0478b16c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "meena.patel@example.com",
    phone: "5678901234",
    bio: "Specializes in organic flowers and decorative plants.",
  },
  {
    id: 15,
    name: "Arjun Rao",
    photo:
      "https://plus.unsplash.com/photo-1559609828-95e8b5f29047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400",
    email: "arjun.rao@example.com",
    phone: "6789012345",
    bio: "Experienced in agroforestry and land management.",
  },
];
