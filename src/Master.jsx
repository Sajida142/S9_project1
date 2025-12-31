import React from 'react'

function Master() {
  return (
    <div>
      <body>
      <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    }

body {
    background: url("img1.jpg") no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Dark overlay behind form */
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
}

/* GLASSMORPHISM FORM */
.container {
    position: relative;
    width: 400px;
    padding: 35px;
    border-radius: 20px;

   
}

.container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 600;
}

/* Input Fields */
.input-group {
    margin-bottom: 15px;
}

.input-group label {
    font-size: 14px;
    color: #f5f5f5;
    margin-bottom: 5px;
    display: block;
}

.input-group input,
.input-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 8px;
    background: rgba(255,255,255,0.25);
    color: #fff;
    outline: none;
    transition: 0.3s;
}

.input-group input::placeholder {
    color: #f0f0f0;
}

.input-group input:focus,
.input-group select:focus {
    border-color: #00c3ff;
    box-shadow: 0 0 8px rgba(0,195,255,0.7);
}

/* Submit Button */
.btn {
    width: 100%;
    background: rgba(0, 153, 255, 0.8);
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
}

.btn:hover {
    background: rgba(0, 153, 255, 1);
    transform: scale(1.08);
    box-shadow: 0 8px 20px rgba(0,153,255,0.7);
}

/* Success Message */
.success {
    display: none;
    text-align: center;
    margin-top: 15px;
    color: #00ff88;
    font-weight: bold;
}

</style>
    <div class="container">
        <h2>Registration Form</h2>
<fieldset>
        <form id="regForm" onsubmit="showMessage(event)">

            <div class="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required/>
            </div>

            <div class="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required/>
            </div>

            <div class="input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required/>
            </div>

            <div class="input-group">
                <label>Date of Birth</label>
                <input type="date" required/>
            </div>

            <div class="input-group">
                <label>Gender</label>
                <select required>
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="input-group">
                <label>Upload Profile Photo</label>
                <input type="file" required/>
            </div>

            <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" required/>
            </div>

            <div class="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Re-enter your password" required/>
            </div>

            <button type="submit" class="btn">Register</button>

            <p id="successMsg" class="success">✔ Registration Successful!</p>

        </form>
        </fieldset>
    </div>
    </body>
</div>

)
}

export default Master
