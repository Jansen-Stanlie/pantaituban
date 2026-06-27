import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const EventCalendar = ({ data = [] }) => {
    const events = data.map((item) => ({
        id: item.id,
        title: item.title,
        start: item.start,
        end: item.end,
        backgroundColor: item.color || "#0ab39c",
        borderColor: item.color || "#0ab39c",
        textColor: "#fff",
        extendedProps: {
            description: item.description,
            location: item.location,
            category: item.category?.name,
        },
    }));

    return (
        <section className="event-calendar">
            <div className="container">
                <div className="calendar-header">
                    <span>
                        📅 Pantai Kelapa Tuban
                    </span>

                    <h2>
                        Event Calendar
                    </h2>

                    <p>
                        Temukan seluruh event menarik yang sedang berlangsung dan rencanakan kunjunganmu ke Pantai Kelapa Tuban.
                    </p>



                </div>
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        interactionPlugin,
                    ]}

                    initialView="dayGridMonth"
                    initialDate={events[0]?.start}
                    height="auto"
                    events={events}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth",
                    }}

                // eventClick={(info) => {
                //     const e = info.event;
                //     alert(

                //         `${e.title} 📍 ${e.extendedProps.location || "-"} 📝 ${e.extendedProps.description || "-"} 🏷️ ${e.extendedProps.category || "-"}`
                //     );
                // }}
                />
            </div>
        </section>
    );

};


export default EventCalendar;



