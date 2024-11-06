import './App.css'; // استيراد ملفات CSS للتنسيق
import Tesimonal from './component/Tesimonal/Tesimonal';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap

function App() {
  return (
    <div className="App">
      <Tesimonal />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
