import React, { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    alamat: '',
    phone: '',
    activity: '',
    msg: '',
    campingDate: null
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));

    // Show or hide date picker based on activity selection
    if (name === 'activity' && value === 'Camping') {
      setShowDatePicker(true);
    } else if (name === 'activity') {
      setShowDatePicker(false);
    }
  };

  const handleDateChange = date => {
    setFormData(prevFormData => ({
      ...prevFormData,
      campingDate: date,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const message = `Name: ${formData.name}\nAlamat: ${formData.alamat}\nPhone: ${formData.phone}\nActivity: ${formData.activity}\nMessage: ${formData.msg}${formData.campingDate ? `\nCamping Date: ${formData.campingDate.toLocaleDateString()}` : ''}`;

    const whatsapp_link = `https://wa.me/6285745410187?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsapp_link, "_blank");
      setLoading(false);
    }, 1000);

    setFormData({
      name: '',
      email: '',
      phone: '',
      activity: '',
      msg: '',
      campingDate: null
    });
  };

  return (
    <section className="st-shape-wrap" id="contact">
      <div className="st-shape1">
        <img src="shape/contact-shape1.svg" alt="shape1" />
      </div>
      <div className="st-shape2">
        <img src="shape/contact-shape2.svg" alt="shape2" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Tetap Terhubung dengan Pantai Kelapa Tuban"
        subTitle="Jangan Lewatkan Momen Terbaik!  <br /> Reservasi Liburan Impian Anda di Pantai Tuban Sekarang!."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div id="st-alert" />
            <form
              onSubmit={onSubmit}
              className="row st-contact-form st-type1"
              method="post"
              id="contact-form"
            >
              <input type="hidden" name="from_name" value="Pantai Tuban" />
              <input type="hidden" name="replyto" value="custom@gmail.com" />
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jhon Doe"
                    required
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Alamat</label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    placeholder="example@gmail.com"
                    onChange={handleInputChange}
                    value={formData.alamat}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+00 376 12 465"
                    required
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='st-form-field st-style1'>
                  <label>Paket liburan</label>
                  <select
                    id='activity'
                    name='activity'
                    required
                    onChange={handleInputChange}
                    value={formData.activity}
                  >
                    <option value=''>Pilih Aktivitas</option>
                    <option value='Berkuda'>Berkuda</option>
                    <option value='Perahu'>Perahu</option>
                    <option value='ATV'>Atv Bike</option>
                    <option value='FlyingFox'>Flying Fox</option>
                    <option value="KolamRenang">Kolam Renang</option>
                    <option value="Camping">Camping</option>
                    <option value="SpotFoto">Spot Foto</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="st-form-field st-style1">
                  <label>Select Camping Date</label>
                  <DatePicker
                    selected={formData.campingDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    className="form-control"
                    placeholderText="Select a date"
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="st-form-field st-style1">
                  <label>Your Message</label>
                  <textarea
                    cols={30}
                    rows={10}
                    id="msg"
                    name="msg"
                    placeholder="Write something here..."
                    required
                    onChange={handleInputChange}
                    value={formData.msg}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="text-center">
                  <div className="st-height-b10 st-height-lg-b10" />
                  <button
                    className="st-btn st-style1 st-color1 st-size-medium"
                    type="submit"
                    id="submit"
                    name="submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default Contact;
