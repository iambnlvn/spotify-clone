import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/components/Input/SearchInput";
import Header from "@/components/header/Header";
import SearchContent from "@/components/searchContents/SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}
const revalidate = 0;
const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="flex flex-col gap-y-4 mb-4">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
