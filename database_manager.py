import sqlite3


DATABASE = 'database/data_source.db'


def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def get_restaurants():
    conn = get_db_connection()
    restaurants = conn.execute('''
        SELECT
            r.Restaurant_Id,
            r.Restaurant_Name,
            r.Address,
            r.Phone_Number,
            r.Email,
            r.Website,
            r.Capacity,
            r.Opening_Time,
            r.Closing_Time,
            rc.Category_Name
        FROM restaurant r
        LEFT JOIN restaurant_category rc ON r.Category_Id = rc.Category_Id
        ORDER BY r.Restaurant_Name
    ''').fetchall()
    conn.close()
    return restaurants


def get_categories():
    conn = get_db_connection()
    categories = conn.execute('''
        SELECT Category_Id, Category_Name, Category_Description
        FROM restaurant_category
        ORDER BY Category_Name
    ''').fetchall()
    conn.close()
    return categories


def add_booking(name, email, restaurant_id, date, time, guests, special_requests):
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO bookings (Name, Email, Restaurant_Id, Date, Time, Guests, Special_Requests)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (name, email, restaurant_id, date, time, guests, special_requests))
    conn.commit()
    conn.close()


def get_customer(user_id):
    conn = get_db_connection()
    customer = conn.execute('''
        SELECT User_Id, User_name, First_Name, Last_Name, Email, Customer_Level, Active_Reservations
        FROM customer
        WHERE User_Id = ?
    ''', (user_id,)).fetchone()
    conn.close()
    return customer
