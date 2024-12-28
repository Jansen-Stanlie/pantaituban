import React, { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    alamat: '',
    phone: '',
    activity: '',
    msg: '',
    tanggal: null,
    jumlah: ''
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
      tanggal: date,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const message = `Name: ${formData.name}\nAlamat: ${formData.alamat}\nJumlah Peserta: ${formData.jumlah} \nPhone: ${formData.phone}\nActivity: ${formData.activity}\nMessage: ${formData.msg}${formData.tanggal ? `\nTanggal Booking: ${formData.tanggal.toLocaleDateString()}` : ''}`;

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
      tanggal: null
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
        title={t("contact.sectionTitle")}
        subTitle={t("contact.sectionSubTitle")}
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
                  <label>{t("contact.form.paket_liburan.title")}</label>
                  <select
                    id='activity'
                    name='activity'
                    required
                    onChange={handleInputChange}
                    value={formData.activity}
                  >
                    <option value=''>{t("contact.form.paket_liburan.subTitle")}</option>
                    <option value='Berkuda'>{t("contact.form.paket_liburan.paket1")}</option>
                    <option value='Perahu'>{t("contact.form.paket_liburan.paket2")}</option>
                    <option value='ATV'>{t("contact.form.paket_liburan.paket3")}</option>
                    <option value='FlyingFox'>{t("contact.form.paket_liburan.paket4")}</option>
                    <option value="KolamRenang">{t("contact.form.paket_liburan.paket5")}</option>
                    <option value="Camping">{t("contact.form.paket_liburan.paket6")}</option>
                    <option value="SpotFoto">{t("contact.form.paket_liburan.paket7")}</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Pilih Tanggal</label>
                  <DatePicker
                    selected={formData.tanggal}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    className="form-control"
                    placeholderText="Select a date"
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="st-form-field st-style1">
                  <label>{t("contact.form.jumlah_pengunjung")}</label>
                  <input
                    type="text"
                    id="jumlah"
                    name="jumlah"
                    placeholder="Jumlah Peserta"
                    onChange={handleInputChange}
                    value={formData.jumlah}
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
