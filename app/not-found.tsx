import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen ">
      <h1 className="font-bold text-5xl text-amber-300">
        <span>404</span>
      </h1>

      <h2 className="pb-3 font-bold">Page Not Found</h2>
      <p className="p-3 text-gray-600 text-sm  dark:text-gray-400">{`Sorry, We couldn't find the page you are looking for.`}</p>
      <div>
        <Button>
          <Link href={"/"}>Back to Home Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
