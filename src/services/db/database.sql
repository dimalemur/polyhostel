----------------------- БАЗА ДАННЫХ ОБЩЕЖИТИЙ -----------------------

CREATE DATABASE "POLYHOSTEL_HOSTELS";

-- общежития
CREATE TABLE hostel
(
    hostel_id serial NOT NULL,
    name      text   NOT NULL,
    type      text   NOT NULL,
    PRIMARY KEY (hostel_id),
    CONSTRAINT unique_hostel_name UNIQUE (name)
);

-- комнаты
CREATE TABLE rooms
(
    room_id serial NOT NULL,
    name    text   NOT NULL,
    PRIMARY KEY (room_id),
    CONSTRAINT unique_room_name UNIQUE (name)
);

-- комнаты в общежитиях
CREATE TABLE rooms_in_hostel
(
    room_in_hostel_id serial  NOT NULL,
    room_id           integer NOT NULL,
    hostel_id         integer NOT NULL,
    PRIMARY KEY (room_in_hostel_id),
    CONSTRAINT unique_hostel_room UNIQUE (room_id, hostel_id),
    CONSTRAINT room_id_rooms_in_hostel_fkey FOREIGN KEY (room_id)
        REFERENCES rooms (room_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT hostel_id_rooms_in_hostel_fkey FOREIGN KEY (hostel_id)
        REFERENCES hostel (hostel_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE

);
---------------------------------------------------------------------

----------------------- БАЗА ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ -----------------------

CREATE DATABASE "POLYHOSTEL_USERS"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

-- пользователи
CREATE TABLE users
(
    user_id  serial NOT NULL,
    login    text   NOT NULL,
    password text   NOT NULL,
    PRIMARY KEY (user_id),
    CONSTRAINT unique_login UNIQUE (login)
);

-- студенты
CREATE TABLE students
(
    user_id           integer,
    student_id        serial  NOT NULL,
    room_in_hostel_id integer NOT NULL,
    name              text    NOT NULL,
    surname           text    NOT NULL,
    patronymic        text,
    PRIMARY KEY (student_id),
    CONSTRAINT unique_full_name UNIQUE (name, surname, patronymic),
    CONSTRAINT user_id_students FOREIGN KEY (user_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

---------------------------------------------------------------------

----------------------- БАЗА ДАННЫХ СТИРКИ -----------------------

CREATE DATABASE "POLYHOSTEL_WASH"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

-- стиральные машинки
CREATE TABLE washer
(
    washer_id serial  NOT NULL,
    hostel_id integer NOT NULL,
    name      text    NOT NULL,
    PRIMARY KEY (washer_id)
);

-- время записи на стирку
CREATE TABLE wash_times
(
    wash_time_id serial                 NOT NULL,
    start_time   time without time zone NOT NULL,
    end_time     time without time zone NOT NULL,
    PRIMARY KEY (wash_time_id),
    CONSTRAINT unique_time_interval UNIQUE (start_time, end_time)
);

-- запись на стирку
CREATE TABLE wash_rec
(
    wash_rec_id  serial  NOT NULL,
    wash_time_id integer NOT NULL,
    washer_id    integer NOT NULL,
    student_id   integer NOT NULL,
    date         date    NOT NULL,
    PRIMARY KEY (wash_rec_id),
    CONSTRAINT unique_wash_rec UNIQUE (wash_time_id, washer_id, student_id, date),
    CONSTRAINT wash_time_id_wash_rec FOREIGN KEY (wash_time_id)
        REFERENCES wash_times (wash_time_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT washer_id_wash_rec FOREIGN KEY (washer_id)
        REFERENCES washer (washer_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

ALTER TABLE wash_rec
    ALTER COLUMN date SET DEFAULT CURRENT_DATE;

---------------------------------------------------------------------

----------------------- БАЗА ДАННЫХ СПОРТА -----------------------

CREATE DATABASE "POLYHOSTEL_SPORT"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

-- время записи в спорт зал
CREATE TABLE sport_times
(
    sport_time_id serial                 NOT NULL,
    start_time    time without time zone NOT NULL,
    end_time      time without time zone NOT NULL,
    PRIMARY KEY (sport_time_id),
    CONSTRAINT unique__sport_time_interval UNIQUE (start_time, end_time)
);

-- запись в спорт зал
CREATE TABLE sport_rec
(
    sport_rec_id  serial  NOT NULL,
    sport_time_id integer NOT NULL,
    student_id    integer NOT NULL,
    date          date    NOT NULL,
    PRIMARY KEY (sport_rec_id),
    CONSTRAINT unique_sport_rec UNIQUE (sport_time_id, student_id, date),
    CONSTRAINT sport_time_id_sport_rec FOREIGN KEY (sport_time_id)
        REFERENCES sport_times (sport_time_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

ALTER TABLE sport_rec
    ALTER COLUMN date SET DEFAULT CURRENT_DATE;

---------------------------------------------------------------------

----------------------- БАЗА ДАННЫХ МЕРОПРИЯТИЙ -----------------------

CREATE DATABASE "POLYHOSTEL_EVENTS"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

-- события
CREATE TABLE events
(
    event_id          serial  NOT NULL,
    room_in_hostel_id integer NOT NULL,
    student_id        integer NOT NULL,
    date              date    NOT NULL,
    title             text    NOT NULL,
    discription       text    NOT NULL,
    phone             text    NOT NULL,
    state             boolean NOT NULL,
    PRIMARY KEY (event_id)
);

ALTER TABLE events
    ALTER COLUMN date SET DEFAULT CURRENT_DATE;


-- записи на события
CREATE TABLE events_rec
(
    events_rec_id serial  NOT NULL,
    event_id      integer NOT NULL,
    student_id    integer NOT NULL,
    PRIMARY KEY (events_rec_id),
    CONSTRAINT event_id_events_rec_fkey FOREIGN KEY (event_id)
        REFERENCES events (event_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

---------------------------------------------------------------------
