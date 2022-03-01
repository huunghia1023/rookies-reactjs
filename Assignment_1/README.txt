1. What is the diffference between the React's function components and class components ?
* Về cấu trúc: 
 - Funtion component
  + Có thể truyền vào props như là tham số và return 1 React element.
  + Không có hàm render
  + Không có constructor
 - Class component 
  + Yêu cầu phải kế thừa từ class React.Component
  + Chứa hàm render
  + Có hàm constructor
* Ở những phiên bản cũ thì function components và class components có nhiều khác biệt cũng như cách ứng dụng.
 + Function components thường dùng để render view thuần, không xử  lí dữ liệu, tính  toán
 + Class components thì có tính toán dữ liệu, gọi api, chuyển data giữa các component 
 + Nhiều function như setState(), componentDidMount(), componentDidUpdate(), componentWillUnmount(),... chỉ hỗ trợ trên class components
* Ở những phiên bản gần đây, Function components được hỗ trợ nhiều tính năng như class (React Hook,...) để đáp ứng nhu cầu như class components. Function components cũng hỗ trợ tốt hơn cho React Redux, cấu trúc viết ngắn gọn nên được nhiều sự quan tâm.
2. What is the component state ?
- Component state là 1 biến local của component. Nó là 1 object chứa 1 số thông tin của component mà có thể thay đổi trong suốt chu kì của component.