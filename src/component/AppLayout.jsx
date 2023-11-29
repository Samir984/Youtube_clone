import Feed from "./Feed";
import Header from "./Header";
import Nav from "./nav/Nav";

function AppLayout() {
  return (
    <div className="b">
      <Header />
      <main className="flex gap-10">
        <Nav />
        <Feed />
      </main>
    </div>
  );
}

export default AppLayout;
