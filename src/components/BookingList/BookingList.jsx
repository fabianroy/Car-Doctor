import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookingList = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    // const url = `http://localhost:3000/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
            axiosSecure.get(url)
                .then(res => {
                    setBookings(res.data);
                })
    }, [url, axiosSecure]);

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleConfirm = id => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirmed';
                    console.log(updated);
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })

    }



    return (
        <div className="my-10">
            <h2 className="text-3xl text-center mb-10">Your Bookings : {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service Id</th>
                            <th>Service Name</th>
                            <th>Customer</th>
                            <th>Service Date</th>
                            <th>Due Amount</th>
                            <th>Confirm</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => (
                                <tr key={booking._id}>
                                    <td>{booking._id}</td>
                                    <td>{booking.service_title}</td>
                                    <td>{booking.customer_name}</td>
                                    <td>{booking.service_date}</td>
                                    <td>{booking.due_amount}</td>
                                    <td>
                                        {
                                            booking.status === 'confirmed' ? <span className="font-semibold text-green-500">Confirmed</span> :
                                                <button onClick={() => handleConfirm(booking._id)} className="btn bg-green-500 text-white">Please Confirm</button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(booking._id)} className="btn bg-orange-400 text-white">Delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookingList;