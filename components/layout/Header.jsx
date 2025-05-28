"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";

import Link from "next/link";
import clsx from "clsx";

const navigation = [
  { name: "Anasayfa", href: "/" },
  { name: "Görevler", href: "/todo" },
  { name: "Ekle", href: "/todo/add" },
];

export default function Header() {
  return (
    <header className="bg-white shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-purple-500">
          🐝 TodoApp
        </Link>

        {/* Masaüstü görünüm */}
        <div className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-purple-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobil görünüm */}
        <Menu as="div" className="md:hidden relative">
          <Menu.Button className="p-2">
            <HiMenu className="w-6 h-6" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded p-2 z-10">
              {navigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={clsx(
                        active ? "text-purple-600" : "text-gray-800",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
