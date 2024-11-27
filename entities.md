Version 1:
Tổng quan các bảng và thuộc tính (không kể profile)

1. Brand

- name : string
- description : string
- dateReleased
- switches : Switch array
- keycaps : Keycap array
- Keyboards : keyboard array

2. Switch

- name : string
- content : string
- brand: Brand
- thumbnail : string
- galleries (các hình ảnh vể switch) : string array
- videos (link từ youtube) : string array
- dateReleased (ngày sản xuất) : Date
- kind : "Linear" | "Tactile" | "Clicky" | "HE"
- type (chân switch) : 3 | 5
- top-housing : string
- bot-housing: string
- stem : string
- travel (hành trình) : number
- force (lực nhấn) : number
- prices: json array { title, price} !Chỗ này để giá tham khảo ở shopee và chợ bàn
- votes : string array
- colors : string array

3. Keycap

- name : string
- content: string
- galleries (các hình ảnh vể switch) : string array
- videos (link từ youtube) : string array
- material  : "PBT" | "ABS" | "ABS Doubleshoot" | "ABS mix PBT"
- profile : string
- dateReleased : Date
- brand : Brand
- prices: json array { title, price} !Chỗ này để giá tham khảo ở shopee và chợ bàn phím
- votes : string array
- type : string array (retro, cute,...)
- colors : string array

4. Keyboard

- material : string
- name : string
- size: string (65, 75, TKL,...)
- mode : string
- dateReleased : Date
- brand : brand
- plates : string array (PC,fr4,alu,...)
- mountings : string array (gasket mount, top mount, ...)
- type: string array (retro, cute,...)
- country : string
- colors : string
- prices: json array { title, price} !Chỗ này để giá tham khảo ở shopee và chợ bàn phím
- galleries (các hình ảnh vể switch) : string array
- videos (link từ youtube) : string array