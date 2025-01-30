export default function OrderSummary() {
  return (
    <div className="max-w-lg w-[80%] mx-auto p-2 border rounded-2xl shadow-xl bg-white md:p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
        Your Order
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <span className="font-medium text-gray-700 text-sm sm:text-base">
            Barberton Daisy (x2)
          </span>
          <span className="font-semibold text-green-600 text-sm sm:text-base">
            $238.00
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <span className="font-medium text-gray-700 text-sm sm:text-base">
            Blushing Bromeliad (x6)
          </span>
          <span className="font-semibold text-green-600 text-sm sm:text-base">
            $834.00
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <span className="font-medium text-gray-700 text-sm sm:text-base">
            Aluminum Plant (x9)
          </span>
          <span className="font-semibold text-green-600 text-sm sm:text-base">
            $1,611.00
          </span>
        </div>
      </div>

      <div className="mt-6 border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">$2,683.00</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium">$16.00</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-800 mt-2">
          <span>Total</span>
          <span className="text-green-700">$2,699.00</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">
        Payment Method
      </h3>
      <div className="mt-2 space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg">
          <input type="radio" name="payment" value="paypal" defaultChecked />
          <span>PayPal / Visa / AmEx</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg">
          <input type="radio" name="payment" value="bank" />
          <span>Direct bank transfer</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg">
          <input type="radio" name="payment" value="cash" />
          <span>Cash on delivery</span>
        </label>
      </div>

      <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300">
        Place Order
      </button>
    </div>
  );
}
