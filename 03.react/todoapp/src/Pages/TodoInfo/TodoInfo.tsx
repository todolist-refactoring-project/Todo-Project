import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';

const TodoInfo = function () {
  return (
    <div id="page">
      <Header title="할일 상세 페이지" />
      <Footer />
    </div>
  );
};

export default TodoInfo;