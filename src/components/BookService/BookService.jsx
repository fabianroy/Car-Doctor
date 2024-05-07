import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;

    const { user } = useContext(AuthContext);

    const handleBookService = (e) => {
        e.preventDefault();
        console.log('Service Booked');

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const email = form.email.value;

        const order = {
            img,
            service_id: _id,
            service_title: title,
            customer_name: name,
            service_date: date,
            due_amount: amount,
            email: email,
            price: price
        }

        console.log(order);

        Swal.fire({
            title: "Want to Book?",
            text: "You are going to book this service!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Book it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(order)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Booked!",
                            text: "Your service has been booked!",
                            icon: "success"
                        })
                    })
            }
        })
    }

    return (
        <div className="my-10">
            <h2 className="text-center text-3xl">Book Service : {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className=" input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Service Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required readOnly />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        {user ? (
                            <input type="email" name="email" defaultValue={user.email} className="input input-bordered" required readOnly />
                        ) : (
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        )}
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-orange-600 text-white" type="submit" value="Confirm Order" />
                </div>
            </form>
        </div>
    );
};

export default BookService;
