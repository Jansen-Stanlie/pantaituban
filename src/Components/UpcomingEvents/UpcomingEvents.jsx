import React from "react";

const UpcomingEvents = ({ data = [] }) => {
    const isEmpty = data.length === 0;

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("id-ID", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <section className="upcoming-events">

            <div className="container">

                <div className="events-header">

                    <span className="tag">
                        📅 Event Pantai Kelapa
                    </span>

                    <h2>
                        Upcoming Events
                    </h2>

                    <p>
                        Jangan lewatkan berbagai event seru yang akan hadir di Pantai Kelapa Tuban.
                    </p>

                </div>

                <div className={`events-grid ${isEmpty ? "empty" : ""}`}>

                    {isEmpty ? (

                        <div className="event-card coming-soon">

                            <div className="coming-soon-icon">
                                🎉
                            </div>

                            <div className="event-category">
                                Segera Hadir
                            </div>

                            <h3>
                                Event Baru Sedang Dipersiapkan
                            </h3>

                            <p>
                                Tim Pantai Kelapa Tuban sedang menyiapkan berbagai
                                kegiatan seru, hiburan, dan pengalaman menarik untuk
                                seluruh pengunjung.
                            </p>

                            <div className="event-detail">

                                <div>
                                    📅 Jadwal akan diumumkan
                                </div>

                                <div>
                                    📍 Pantai Kelapa Tuban
                                </div>

                            </div>

                            <div className="status upcoming">
                                Coming Soon
                            </div>

                        </div>

                    ) : (

                        data.map((event) => (

                            <div
                                key={event.id}
                                className="event-card"
                            >

                                <div
                                    className="event-category"
                                    style={{
                                        background:
                                            event.category?.color || "#0ab39c",
                                    }}
                                >
                                    {event.category?.name || "Event"}
                                </div>

                                <h3>
                                    {event.title}
                                </h3>

                                {event.description && (

                                    <p>
                                        {event.description}
                                    </p>

                                )}

                                <div className="event-detail">

                                    <div>
                                        📅 {formatDate(event.start)}
                                    </div>

                                    {event.location && (

                                        <div>
                                            📍 {event.location}
                                        </div>

                                    )}

                                </div>

                                <div
                                    className={`status ${event.status || "upcoming"}`}
                                >
                                    {event.status || "Upcoming"}
                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </section>
    );
};

export default UpcomingEvents;