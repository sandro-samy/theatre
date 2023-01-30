import React, { useState, Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const SearchNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${value.trim().toLowerCase().split(" ").join("+")}`);
    setValue("");
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center gap-1 relative">
      <button
        className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BsSearch className="h-8 w-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          Search
        </p>
      </button>

      <Transition
        show={isOpen}
        enter="transition duration-150 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-125 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        as={Fragment}
      >
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed flex justify-center items-start md:items-center right-0 left-0 top-0 bottom-0 min-h-screen h-screen w-screen z-10 bg-black/50 text-black"
        >
          <Dialog.Panel className="bg-white p-10 pt-7 card mt-20 md:mt-0 mb-40">
            <Dialog.Title className="text-xl mb-5 flex justify-center items-center">
              Search for movie
            </Dialog.Title>
            <form
              className="border-2 border-black divide-x-2 divide-black"
              onSubmit={(e) => submitHandler(e)}
            >
              <input
                type={"text"}
                placeholder="search..."
                className="outline-none rounded-none  px-2 py-2 "
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="py-2 px-2" type="submit">
                Search
              </button>
            </form>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchNav;
