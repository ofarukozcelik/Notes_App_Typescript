import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../../types";

const Layout = ({ notes }: { notes: Note[] }) => {
    // Urldeki id'yi al
    const { id } = useParams();

    // Notes dizisinde elemanı ara
    const found = notes.find((i) => i.id === id);

    // Elemanı bulamazsan anasayfaya yönlendir
    if (!found) return <Navigate to="/" replace />;

    // Parent route içerisinde alt route'u renderla
    return <Outlet context={found} />;
};

export default Layout;
