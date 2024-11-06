import React, { useState, useEffect } from 'react'; // استيراد React و useState و useEffect من مكتبة React
import Title from '../Title'; // استيراد مكون Title
import Button from '../Button'; // استيراد مكون Button
import { BsFileEarmarkPostFill } from "react-icons/bs"; // استيراد أيقونة ملف
import { FaRegUser, FaComments } from "react-icons/fa"; // استيراد أيقونات المستخدم والتعليقات

export default function Tesimonal() {
  const [testimonials, setTestimonials] = useState(''); // تعريف حالة لتحديد نوع البيانات المطلوبة (posts, users, comments)
  const [items, setItems] = useState([]); // تعريف حالة لتخزين البيانات المجلوبة من API

  // استخدام useEffect لجلب البيانات من API عند تغيير حالة testimonials
  useEffect(() => {
    if (testimonials) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`) // جلب البيانات من API بناءً على نوع البيانات المطلوبة
        .then(response => response.json()) // تحويل الاستجابة إلى JSON
        .then(json => {
          if (Array.isArray(json)) {
            setItems(json); // تخزين البيانات في الحالة items إذا كانت مصفوفة
          } else {
            setItems([]); // إعادة تعيين items إلى مصفوفة فارغة إذا لم تكن البيانات مصفوفة
            console.error('Received data is not an array:', json); // طباعة خطأ في الكونسول
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error); // طباعة خطأ في حال فشل الجلب
          setItems([]); // تعيين items إلى مصفوفة فارغة في حال حدوث خطأ
        });
    }
  }, [testimonials]); // تنفيذ هذا التأثير عند تغيير حالة testimonials

  return (
    <div className='container text-center'> {/* تحديد تنسيق العنصر */}
      <Title text={"Testimonial"} className={"mt-5 mb-5"} /> {/* عرض العنوان */}
      
      <div className='d-flex justify-content-center gap-3'>
        <Button text={"Posts"} btnClass={"btn btn-info text-white btn-lg"} icon={<BsFileEarmarkPostFill className='me-2' />} onClick={() => setTestimonials("posts")} /> {/* زر لتحميل المنشورات */}
        <Button text={"User"} btnClass={"btn btn-success text-white btn-lg"} icon={<FaRegUser className='me-2' />} onClick={() => setTestimonials("users")} /> {/* زر لتحميل المستخدمين */}
        <Button text={"Comments"} btnClass={"btn btn-danger text-white btn-lg"} icon={<FaComments className='me-2' />} onClick={() => setTestimonials("comments")} /> {/* زر لتحميل التعليقات */}
      </div>
      
      <Title text={!testimonials ? "Select from above!" : testimonials} className={"fs-2 text-warning mt-5"} /> {/* عرض النص بناءً على حالة testimonials */}
      
      {!items.length ? null : items.map((item) => (
       <div key={item.id}>
         <div className='card mb-2'>{item.name}</div> {/* عرض اسم العنصر في بطاقة */}
         <div className='card-body'>
           <h4>{item.title}</h4> {/* عرض عنوان العنصر */}
           <p>{item.body}</p> {/* عرض محتوى العنصر */}
         </div>
       </div>
      ))}
    </div>
  );
}
