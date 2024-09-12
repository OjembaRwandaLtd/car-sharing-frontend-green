const Routes = {
  HOME: "/",
  LOGIN: {
    ROOT: "/login",
    LANDING: "/landing",
  },
  CARS: {
    ROOT: "/cars",
    VIEW: "/cars/:carId",
    NEW: "/cars/new",
    OWN: "/cars/own",
  },
  BOOKINGS: {
    ROOT: "/bookings",
    NEW: "/bookings/new",
    MANAGE: "/bookings/manage",
  },
}

export default Routes
