import React, { useState } from 'react'; // استيراد React و useState من مكتبة React
import './likeimg.css'; // استيراد ملف التنسيقات CSS
import Title from '../Title'; // استيراد مكون Title
import Img from './16.png'; // استيراد صورة من المسار المحدد
import { FaFaceSmile } from "react-icons/fa6"; // استيراد أيقونة وجه مبتسم
import { FaRegHeart } from "react-icons/fa"; // استيراد أيقونة قلب فارغ
import { IoChatbubblesOutline } from "react-icons/io5"; // استيراد أيقونة فقاعات الدردشة
import { FaHeart } from "react-icons/fa"; // استيراد أيقونة قلب مملوء

export default function Likeimg() {
    const [like, setLike] = useState(false); // تعريف حالة لإدارة حالة الإعجاب (قلب ممتلئ أو فارغ)
    const [count, setCount] = useState(0); // تعريف حالة لإدارة عدد الإعجابات

    // دالة handleClick لتحديث حالة الإعجاب وعدد الإعجابات عند النقر
    function handleClick() {
        if (!like) {
            setLike(true); // تعيين حالة الإعجاب إلى true (معجب)
            setCount(count + 1); // زيادة عدد الإعجابات بمقدار واحد
        } else {
            setLike(false); // تعيين حالة الإعجاب إلى false (غير معجب)
            setCount(count - 1); // تقليل عدد الإعجابات بمقدار واحد
        }
    }

    return (
        <div className='container text-center'> {/* تحديد تنسيق العنصر */}
            <Title text={"Like Image"} className={"mt-5 mb-5"} /> {/* عرض العنوان */}
            <h2>Likes : {count}</h2> {/* عرض عدد الإعجابات */}
            <div className='card card-dark m-auto'>
                <div className="card-header fs-5">
                    <FaFaceSmile style={{ marginRight: 10 }} /> {/* عرض أيقونة وجه مبتسم */}
                    <small>My Design</small> {/* عرض النص الصغير "My Design" */}
                </div>
                <img src={Img} alt='img' onDoubleClick={handleClick} /> {/* عرض الصورة وتغيير حالة الإعجاب عند النقر المزدوج */}
                <div className="card-footer fs-5">
                    <IoChatbubblesOutline /> {/* عرض أيقونة فقاعات الدردشة */}
                    {like ? (
                        <FaHeart className="text-danger" onClick={handleClick} /> // عرض أيقونة قلب ممتلئ باللون الأحمر عند الإعجاب
                    ) : (
                        <FaRegHeart onClick={handleClick} /> // عرض أيقونة قلب فارغ عند عدم الإعجاب
                    )}
                </div>
            </div>
        </div>
    );
}
