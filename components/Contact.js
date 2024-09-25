<<<<<<< HEAD
import axios from "axios";

export default function Contact() {
  async function create(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(new Date());
    // This function can be used to send the form data to the server
    // and perform any necessary asynchronous tasks.
    // For example, you can use the fetch API to make an HTTP request.
    try {
      const response = await axios.post("api/message", {
        ...data,
        date: new Date(),
      });
      if (response.status === 200) {
        // Reset the form
        e.target.reset();
        // Handle success
        alert("Form data submitted successfully.");
      } else {
        // Handle errors
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <section className="section bg-white" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h5 className="section-title mb-5">Contact Me</h5>

        {/* <!-- contact form --> */}
        <form
          onSubmit={create}
          className="contact-form col-md-10 col-lg-8 m-auto"
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size="50"
                className="form-control"
                placeholder="Your Name"
                name="name"
                required={true}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                required={true}
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="message"
                id="message"
                rows="6"
                className="form-control"
                placeholder="Write Something"
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
        {/* <!-- end of contact form --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
=======
import axios from "axios";

export default function Contact() {
  async function create(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(new Date());
    // This function can be used to send the form data to the server
    // and perform any necessary asynchronous tasks.
    // For example, you can use the fetch API to make an HTTP request.
    try {
      const response = await axios.post("api/message", {
        ...data,
        date: new Date(),
      });
      if (response.status === 200) {
        // Reset the form
        e.target.reset();
        // Handle success
        alert("Form data submitted successfully.");
      } else {
        // Handle errors
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <section className="section bg-white" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h5 className="section-title mb-5">Contact Me</h5>

        {/* <!-- contact form --> */}
        <form
          onSubmit={create}
          className="contact-form col-md-10 col-lg-8 m-auto"
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size="50"
                className="form-control"
                placeholder="Your Name"
                name="name"
                required={true}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                required={true}
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="message"
                id="message"
                rows="6"
                className="form-control"
                placeholder="Write Something"
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
        {/* <!-- end of contact form --> */}
      </div>
      {/* <!-- end of container --> */}
    </section>
  );
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
