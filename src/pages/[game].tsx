import { GetServerSideProps } from "next";
import Link from "next/link";

interface GamePageProps {
  game: string;
}

export const getServerSideProps: GetServerSideProps<GamePageProps> = async ({
  req,
}) => {
  const hostname = req.headers.host || "";
  return {
    props: { game: hostname.split(".")[0] },
  };
};

const GamePage: React.FC<GamePageProps> = ({ game }) => {
  return (
    <div>
      <h1>Welcome to the {game} values page!</h1>
      <Link href="http://valuesroblox.com" className="text-blue-500 hover:underline">
        Back to Hub
      </Link>
    </div>
  );
};

export default GamePage;
