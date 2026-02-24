import React from 'react'

function Master() {
  return (
    <div>
      
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
</div>

)
}

export default Master
