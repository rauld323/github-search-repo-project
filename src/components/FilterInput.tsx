interface IProps {
  filterOptions: string[];
  onFilterChange: (searchQuery: string | null) => void;
}

const FilterInput: React.FC<IProps> = ({ filterOptions }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={undefined}
          onChange={undefined}
          disabled={filterOptions.length === 0 ? true : false}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

export default FilterInput;
