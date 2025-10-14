from flask import Flask, render_template, request, redirect, url_for, flash
from database_manager import get_restaurants, get_categories, add_booking

app = Flask(__name__)
app.secret_key = 'aB3$kL9mP2qR5tY8zX1cV4nM7wJ0sF6hG'


@app.route('/')
def index():
    restaurants = get_restaurants()[:6]
    return render_template('index.html', restaurants=restaurants)


@app.route('/browse')
def browse():
    search = request.args.get('search', '')
    category = request.args.get('category', '')
    sort = request.args.get('sort', 'name')
    page = int(request.args.get('page', 1))
    per_page = 9

    all_restaurants = get_restaurants()

    filtered = []
    for restaurant in all_restaurants:
        matches = True
        
        if search and search.lower() not in restaurant['Restaurant_Name'].lower():
            matches = False
        
        if category and restaurant['Category_Name'] != category:
            matches = False
        
        if matches:
            filtered.append(restaurant)
    
    if sort == 'name':
        filtered.sort(key=lambda x: x['Restaurant_Name'])
    elif sort == 'capacity-high':
        filtered.sort(key=lambda x: x['Capacity'], reverse=True)
    elif sort == 'capacity-low':
        filtered.sort(key=lambda x: x['Capacity'])
    
    total = len(filtered)
    start = (page - 1) * per_page
    end = start + per_page
    restaurants = filtered[start:end]
    
    has_more = end < total
    
    categories = get_categories()
    
    return render_template('browse.html', 
            restaurants=restaurants, 
            categories=categories,
            search=search,
            category=category,
            sort=sort,
            page=page,
            has_more=has_more,
            total=total)


@app.route('/booking', methods=['GET', 'POST'])
def booking():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        restaurant_id = request.form.get('restaurant_id')
        date = request.form.get('date')
        time = request.form.get('time')
        guests = request.form.get('guests')
        special_requests = request.form.get('special_requests')

        add_booking(name, email, restaurant_id, date, time, guests, special_requests)
        flash('Booking submitted successfully!', 'success')
        return redirect(url_for('index'))

    restaurants = get_restaurants()
    return render_template('booking.html', restaurants=restaurants)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        flash(f'Welcome, {username}! (Mock login - not secure)', 'info')
        return redirect(url_for('index'))

    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5100)