import React, { createContext, useState } from 'react';

export const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
  const check = localStorage.getItem('user');

  // if(check == null) // Kiểm tra xem user đã được lưu trong local storage chưa
  // if (!localStorage.getItem('user')) {
  //     // Nếu chưa tồn tại, tạo mới user và lưu vào local storage
  //     const user = {
  //         user_id: generateUserId(), // Hàm generateUserId() tạo một user_id mới
  //         accountTypeID: '3' // Hoặc bất kỳ giá trị mặc định nào bạn muốn
  //     };
  //     localStorage.setItem('user', JSON.stringify(user));
  // }
  
  // Hàm để tạo user_id mới, bạn có thể tùy chỉnh cách tạo mã user_id của riêng mình
  // function generateUserId() {
  //     // Code để tạo user_id mới, ví dụ:
  //     // return uuid(); // Sử dụng thư viện uuid để tạo UUID duy nhất
  // }
  
    
  const [logged, setLogged] = useState(check);


  return (
    <LoggedContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoggedContext.Provider>
  );
};