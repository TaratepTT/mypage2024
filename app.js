// let money = 500; //integer
// console.log(typeof(money));

// let checkProduct = true;
// console.log(typeof(checkProduct));

// let checkboo = true+10;
// console.log(checkboo)

// let age = parseInt(20.15); //แปลงจาก float to integer
// console.log(age);
// console.log(typeof(age));

// let number = parseFloat("20.80"); //แปลงจาก float to float
// console.log(number+100);
// console.log(typeof(number));

// let time = 40+""; // แปลงจาก integer to String
// console.log(time);
// console.log(typeof(time));

// // /*
// // //*คอมเม้นทั้งหมด */

// // //แสดงข้อความในหน้าเว็บ
// // document.write("<h2>Ecommerce</h2>");
// // document.write("<p>Javascript</p>");

// // //แสดงข้อความหลังบ้าน
// // alert("คุณได้รับโชค")
// // console.log("Hello Javascript");
// // console.error("ตรวจพบไวรัส")
// // console.warn("เจอข้อผิดพลาด")

// // /*let name; //สรา้งตัวแปรแต่ไมไ่ด้กำหนดค่า
// // name = "โปรแกรมจำลอง"; //กำหนดข้อความลงไปเก็บไว้ในตัวแปร name
// // let age = 25 */

// // let name = "พี่เสือสุดหล่อ" , age = 20;

// // console.log(name);
// // document.write(name);
// // console.log("อายุ = ",age);


// // //index เริ่มต้นที่ 0 สมาชิกตัวแรก วิธีที่ 1
// // let number = Array(1,2,"3",4.55,true,6);
// // console.log(number);
// // console.log("สมาชิกตัวแรก = " , number[0]);
// // console.log("สมาชิกตัวที่สอง = " , number[1]);


// // //index เริ่มต้นที่ 0 สมาชิกตัวแรก วิธีที่ 2
// // let colors = ["แดง" , "เหลือง" , "เขียว"];
// // colors[0] = "ส้ม";  //วิธีการเปลี่ยนค่า
// // console.log(colors);

//เครื่องหมายทางคณิตสาส
// let a = 10 , b = 20 ;
// console.log(a+b);

// console.log("ผลบวก = " ,5+10);
// console.log("ผลลบ = " ,5-10);
// console.log("ผลคูณ = " ,5*10);
// console.log("ผลหาร = " ,5/10);
// console.log("ผลเศษ = " ,20%10);
// console.log("ยกกำลัง = " ,5**2);



// let a = 5 , b = 10 ;
// console.log("เท่ากันหรือไม่",a == b);
// console.log("ไม่เท่ากันหรือไม่",a != b);
// console.log("มากกว่ากันหรือไม่",a > b);
// console.log("น้อยกว่ากันหรือไม่",a < b);
// console.log("มากกว่าหรือเท่ากับหรือไม่",a >= b);
// console.log("น้อยกว่าหรือเท่ากับหรือไม่",a <= b);
// console.log(!check);



// and และ
// or หรือ
// ซื้อมะม่วงและเงะหรือไม่ ?
// a = ซื้อมะม่วงหรือเปล่า? and b = ซื้อเงาะหรือเปล่า?
// a = true && b = true => a && b => กลับบ้าน (false)
// a = ซื้อมะม่วงหรือเปล่า? or b = ซื้อเงาะหรือเปล่า?
// a = true && b = true => a or  b => กลับบ้าน (false)


//โปรแกรมตัดเกรด
//      80 =>A
// 70 - 79 =>B
// 60 - 69 =>C
// 50 - 59 =>D
//  0 - 49 =>F
// let score = 70;
// console.log(score >=70 && score <= 80,"A");
// console.log(score >=70 || score <= 80);
// and (true) => ซ้าย&&ขวา ต้องเป็นจริงทั้งคู่
// or (true) => ซ้าย||ขวา ต้องเป็นจริง


// let a = 5 , b = 10;
// //เพิ่มค่า Prefix
// console.log("ค่าเริ่มต้น = " , a);
// console.log("แบบ Prefix = " , ++a);
// console.log("ค่าปัจจุบัน = " , a);



//เพิ่มค่าแบบ Postfix

// let a = 5 , b = 10;

// console.log("ค่าเริ่มต้น = " , a);
// console.log("แบบ Prefix = " , a++);
// console.log("ค่าปัจจุบัน = " , a);