import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const Landing = React.lazy(() => import("./Pages/Landing/Landing"));
const ProductDetail = React.lazy(() =>
  import("./Pages/ProductDetail/ProductDetail")
);
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const Payment = React.lazy(() => import("./Pages/Payment/Payment"));
const Orders = React.lazy(() => import("./Pages/Orders/Orders"));
const Results = React.lazy(() => import("./Pages/Results/Results"));

const stripePromise = loadStripe(
  "pk_test_51SNX2EEOIZdnlXdWHPe9qFP5CmamaRXHmpxX3qVFw8t4zfuBo9thuanuYrVHkNoAkbuvKudYGN1AUtoaHiBI5OhA009wkD7ls8"
);

function Router() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/payments"
              element={
                <ProtectedRoute
                  msg={"You must login to pay"}
                  redirect={"/payments"}
                >
                  <Elements stripe={stripePromise}>
                    <Payment />
                  </Elements>
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute
                  msg={"You must need to Sign in to access your orders"}
                  redirect={"/orders"}
                >
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default Router;
