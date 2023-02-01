import HeroImage from "../../../assets/food/food4.webp";
export default function Login() {
   
  return (
    <>
          <body>
            <div class="reservation-form">
              <div class="col-md-4 p-5 shadow-sm border rounded-3">
                <h2 class="text-center mb-4 text-primary">Login Form</h2>
                <form>
                  <div class="reservation-form">
                    <label for="exampleInputEmail1" class="form-label">Email: </label>
                   
                    <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  </div>
                  <div class="reservation-form ">
                    <label for="exampleInputPassword1" class="form-label">Password: </label>
                    <input type="password" class="form-control border border-primary" id="exampleInputPassword1"></input>
                  </div>
                  <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p>
                  <div class="d-grid">
                    <button class="redirect-button:hover" type="submit">Login</button>
                  </div>
                </form>
                <div class="mt-3">
                  <p class="mb-0  text-center">Don't have an account? <a href="signup.html"
                    class="text-primary fw-bold">Sign
                    Up</a></p>
                </div>
              </div>
            </div>
          </body>
    </>
  );
}
