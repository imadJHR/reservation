import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import axios from "axios";
import { Button } from "./components/ui/button";

// Mock function to simulate API call

export default function Component() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("https://reservation-api-xdr1.onrender.com/reservations");
        setReservations(response.data);
        setLoading(false);
        setErrorMessage("failed to fetch data");
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservations();
  }, []);

  const deleteReservation = async (id) => {
    try {
      await axios.delete(`https://reservation-api-xdr1.onrender.com/reservation/${id}`);
      setReservations((prevReservations) =>
        prevReservations.filter((reservations) => reservations._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full max-w-6xl  mx-auto  my-36">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Reservation Admin Panel
        </CardTitle>
      </CardHeader>
      <Card className="w-full max-w-6xl mx-auto pt-2">
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Table className="  ">
                <TableHeader>
                  <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Special Requests</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="p-5">
                  {reservations.map((reservation) => (
                    <TableRow key={reservation._id}>
                      <TableCell>{reservation.firstName}</TableCell>
                      <TableCell>{reservation.lastName}</TableCell>
                      <TableCell>{reservation.email}</TableCell>
                      <TableCell>{reservation.phone}</TableCell>
                      <TableCell>{reservation.guests}</TableCell>
                      <TableCell>{reservation.date}</TableCell>
                      <TableCell>{reservation.time}</TableCell>
                      <TableCell>{reservation.specialRequests}</TableCell>

                      <Button
                        className="bg-red-500 flex items-center justify-center"
                        onClick={() => deleteReservation(reservation._id)}
                      >
                        DELETE
                      </Button>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
