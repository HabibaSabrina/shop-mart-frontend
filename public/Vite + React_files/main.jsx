import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4a922927"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=4a922927"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=4a922927"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx";
import "/src/index.css?t=1696540939793";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=4a922927";
import Home from "/src/components/Home/Home.jsx?t=1696539894392";
import Main from "/src/Layout/Main.jsx";
import ProductCart from "/src/components/ProductCart/ProductCart.jsx";
import { addedProductsCart } from "/src/loader/getAddedProducts.js?t=1696540790224";
import ProductDetail from "/src/components/ProductDetail/ProductDetail.jsx";
import PaymentHistory from "/src/components/Payment/PaymentHistory/PaymentHistory.jsx";
import CheckoutForm from "/src/components/Payment/CheckoutForm/CheckoutForm.jsx?t=1696540593567";
import Dashboard from "/src/Layout/Dashboard.jsx";
import User from "/src/components/Dashboard/User/User.jsx";
import Products from "/src/components/Products/Products.jsx?t=1696539884297";
import Faq from "/src/components/FAQ/Faq.jsx?t=1696536642333";
import DetailSection from "/src/components/ProductDetail/DetailSection.jsx?t=1696517787644";
import ProductProvider from "/src/Provider/ProductProvider.jsx";
import Register from "/src/components/LoginRegister/Register/Register.jsx?t=1696540937988";
import Login from "/src/components/LoginRegister/Login/Login.jsx?t=1696541308529";
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ jsxDEV(Main, {}, void 0, false, {
    fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
    lineNumber: 26,
    columnNumber: 12
  }, this),
  children: [{
    path: "/",
    element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 29,
      columnNumber: 14
    }, this)
  }, {
    path: "/productcart",
    element: /* @__PURE__ */ jsxDEV(ProductCart, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 32,
      columnNumber: 14
    }, this),
    loader: addedProductsCart
  }, {
    path: "/product/:id",
    element: /* @__PURE__ */ jsxDEV(DetailSection, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 36,
      columnNumber: 14
    }, this),
    loader: () => fetch(`/datasets/products.json`)
  }, {
    path: "/payment",
    element: /* @__PURE__ */ jsxDEV(CheckoutForm, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 40,
      columnNumber: 14
    }, this)
  }, {
    path: "/history",
    element: /* @__PURE__ */ jsxDEV(PaymentHistory, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 43,
      columnNumber: 14
    }, this)
  }, {
    path: "/login",
    element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 46,
      columnNumber: 14
    }, this)
  }, {
    path: "/product",
    element: /* @__PURE__ */ jsxDEV(Products, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 49,
      columnNumber: 14
    }, this)
  }, {
    path: "/register",
    element: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 52,
      columnNumber: 14
    }, this)
  }, {
    path: "/faq",
    element: /* @__PURE__ */ jsxDEV(Faq, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 55,
      columnNumber: 14
    }, this)
  }]
}, {
  path: "dashboard",
  element: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
    fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
    lineNumber: 59,
    columnNumber: 12
  }, this),
  children: [{
    path: "user",
    element: /* @__PURE__ */ jsxDEV(User, {}, void 0, false, {
      fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
      lineNumber: 62,
      columnNumber: 14
    }, this)
  }]
}]);
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(ProductProvider, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
  lineNumber: 67,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
  lineNumber: 66,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "F:/progeamming hero/Tasks for jobs/techqsync-project/src/main.jsx",
  lineNumber: 65,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUNhO0FBakNiLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxTQUNFQyxxQkFDQUMsc0JBQ0s7QUFDUCxPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsaUJBQWlCO0FBQ3hCLFNBQVNDLHlCQUF5QjtBQUVsQyxPQUFPQyxtQkFBbUI7QUFDMUIsT0FBT0Msb0JBQW9CO0FBQzNCLE9BQU9DLGtCQUFrQjtBQUV6QixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsY0FBYztBQUdyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLG1CQUFtQjtBQUMxQixPQUFPQyxxQkFBcUI7QUFDNUIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxXQUFXO0FBSWxCLE1BQU1DLFNBQVNqQixvQkFBb0IsQ0FDakM7QUFBQSxFQUNFa0IsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU07QUFBQSxFQUNmQyxVQUFTLENBQ1A7QUFBQSxJQUNFRixNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTTtBQUFBLEVBQ2hCLEdBQ0E7QUFBQSxJQUNFRCxNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWE7QUFBQSxJQUNyQkUsUUFBUWhCO0FBQUFBLEVBQ1YsR0FDQTtBQUFBLElBQ0VhLE1BQUs7QUFBQSxJQUNMQyxTQUFRLHVCQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZTtBQUFBLElBQ3ZCRSxRQUFPQSxNQUFNQyxNQUFPLHlCQUF3QjtBQUFBLEVBQzlDLEdBQ0E7QUFBQSxJQUNFSixNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWM7QUFBQSxFQUN4QixHQUNBO0FBQUEsSUFDRUQsTUFBSztBQUFBLElBQ0xDLFNBQVEsdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQjtBQUFBLEVBQzFCLEdBQ0E7QUFBQSxJQUNFRCxNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLEVBQ2pCLEdBQ0E7QUFBQSxJQUNFRCxNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVTtBQUFBLEVBQ3BCLEdBQ0E7QUFBQSxJQUNFRCxNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVTtBQUFBLEVBQ3BCLEdBQ0E7QUFBQSxJQUNFRCxNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSztBQUFBLEVBQ2YsQ0FBQztBQUdMLEdBQ0E7QUFBQSxFQUNFRCxNQUFLO0FBQUEsRUFDTEMsU0FBUSx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBVztBQUFBLEVBQ25CQyxVQUFTLENBQ1A7QUFBQSxJQUNFRixNQUFLO0FBQUEsSUFDTEMsU0FBUSx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTTtBQUFBLEVBQ2hCLENBQUM7QUFFTCxDQUFDLENBQ0Y7QUFFRHJCLFNBQVN5QixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUNuRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxtQkFDRCxpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCLEtBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJQSxDQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIkhvbWUiLCJNYWluIiwiUHJvZHVjdENhcnQiLCJhZGRlZFByb2R1Y3RzQ2FydCIsIlByb2R1Y3REZXRhaWwiLCJQYXltZW50SGlzdG9yeSIsIkNoZWNrb3V0Rm9ybSIsIkRhc2hib2FyZCIsIlVzZXIiLCJQcm9kdWN0cyIsIkZhcSIsIkRldGFpbFNlY3Rpb24iLCJQcm9kdWN0UHJvdmlkZXIiLCJSZWdpc3RlciIsIkxvZ2luIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImxvYWRlciIsImZldGNoIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7XG4gIGNyZWF0ZUJyb3dzZXJSb3V0ZXIsXG4gIFJvdXRlclByb3ZpZGVyLFxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZS5qc3gnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9MYXlvdXQvTWFpbi5qc3gnO1xuaW1wb3J0IFByb2R1Y3RDYXJ0IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FydC9Qcm9kdWN0Q2FydC5qc3gnO1xuaW1wb3J0IHsgYWRkZWRQcm9kdWN0c0NhcnQgfSBmcm9tICcuL2xvYWRlci9nZXRBZGRlZFByb2R1Y3RzLmpzJztcblxuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwvUHJvZHVjdERldGFpbC5qc3gnO1xuaW1wb3J0IFBheW1lbnRIaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9QYXltZW50L1BheW1lbnRIaXN0b3J5L1BheW1lbnRIaXN0b3J5LmpzeCc7XG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gJy4vY29tcG9uZW50cy9QYXltZW50L0NoZWNrb3V0Rm9ybS9DaGVja291dEZvcm0uanN4Jztcbi8vIGltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9MYXlvdXQvRGFzaGJvYXJkLmpzeCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkL1VzZXIvVXNlci5qc3gnO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qc3gnO1xuLy8gaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlci5qc3gnO1xuXG5pbXBvcnQgRmFxIGZyb20gJy4vY29tcG9uZW50cy9GQVEvRkFRLmpzeCc7XG5pbXBvcnQgRGV0YWlsU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbC9EZXRhaWxTZWN0aW9uLmpzeCc7XG5pbXBvcnQgUHJvZHVjdFByb3ZpZGVyIGZyb20gJy4vUHJvdmlkZXIvUHJvZHVjdFByb3ZpZGVyLmpzeCc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXIvUmVnaXN0ZXIvUmVnaXN0ZXIuanN4JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW5SZWdpc3Rlci9Mb2dpbi9Mb2dpbi5qc3gnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8TWFpbj48L01haW4+LFxuICAgIGNoaWxkcmVuOltcbiAgICAgIHtcbiAgICAgICAgcGF0aDpcIi9cIixcbiAgICAgICAgZWxlbWVudDo8SG9tZT48L0hvbWU+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOlwiL3Byb2R1Y3RjYXJ0XCIsXG4gICAgICAgIGVsZW1lbnQ6PFByb2R1Y3RDYXJ0PjwvUHJvZHVjdENhcnQ+LFxuICAgICAgICBsb2FkZXI6IGFkZGVkUHJvZHVjdHNDYXJ0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOlwiL3Byb2R1Y3QvOmlkXCIsXG4gICAgICAgIGVsZW1lbnQ6PERldGFpbFNlY3Rpb24+PC9EZXRhaWxTZWN0aW9uPixcbiAgICAgICAgbG9hZGVyOigpID0+IGZldGNoKGAvZGF0YXNldHMvcHJvZHVjdHMuanNvbmApXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOlwiL3BheW1lbnRcIixcbiAgICAgICAgZWxlbWVudDo8Q2hlY2tvdXRGb3JtPjwvQ2hlY2tvdXRGb3JtPlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDpcIi9oaXN0b3J5XCIsXG4gICAgICAgIGVsZW1lbnQ6PFBheW1lbnRIaXN0b3J5PjwvUGF5bWVudEhpc3Rvcnk+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOicvbG9naW4nLFxuICAgICAgICBlbGVtZW50OjxMb2dpbj48L0xvZ2luPlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDonL3Byb2R1Y3QnLFxuICAgICAgICBlbGVtZW50OjxQcm9kdWN0cz48L1Byb2R1Y3RzPlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDonL3JlZ2lzdGVyJyxcbiAgICAgICAgZWxlbWVudDo8UmVnaXN0ZXI+PC9SZWdpc3Rlcj5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6Jy9mYXEnLFxuICAgICAgICBlbGVtZW50OjxGYXE+PC9GYXE+XG4gICAgICB9XG4gICAgICBcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidkYXNoYm9hcmQnLFxuICAgIGVsZW1lbnQ6PERhc2hib2FyZD48L0Rhc2hib2FyZD4sXG4gICAgY2hpbGRyZW46W1xuICAgICAge1xuICAgICAgICBwYXRoOid1c2VyJyxcbiAgICAgICAgZWxlbWVudDo8VXNlcj48L1VzZXI+XG4gICAgICB9XG4gICAgXVxuICB9XG5dKTtcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxQcm9kdWN0UHJvdmlkZXI+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUHJvZHVjdFByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuKVxuIl0sImZpbGUiOiJGOi9wcm9nZWFtbWluZyBoZXJvL1Rhc2tzIGZvciBqb2JzL3RlY2hxc3luYy1wcm9qZWN0L3NyYy9tYWluLmpzeCJ9