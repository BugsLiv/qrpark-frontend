"use client";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";


import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { fetchMessages } from "@/store/slices/vehicleSlice";
import Loading from "@/app/loading";


export default function MessagesPage() {
  const dispatch = useDispatch();


  const [page, setPage] = useState(1);

  const limit = 5;

  const {
    loading,
    error,
    messages,
    meta,
  } = useSelector((state) => state.vehicle);
console.log("messages",messages,meta)
  useEffect(() => {
    dispatch(fetchMessages({ page, limit }));
  }, [dispatch, page]);

  return (
    <div className="py-4 px-4">

      <h1 className="text-2xl font-bold text-primary">
        Messages
      </h1>
{
    loading && <Loading/>
}

      {/* {loading && (
        <p className="text-center py-10">
          Loading messages...
        </p>
      )} */}

      {error && (
        <p className="text-red-500 text-center py-10">
          {error}
        </p>
      )}

      {!loading && messages?.length === 0 && (
        <div className="text-center py-20">
          <BiSolidMessageRoundedDots
            className="mx-auto text-slate-300 mb-4"
            size={60}
          />

          <h2 className="text-xl font-bold text-primary mb-2">
            No Messages Yet
          </h2>

          <p className="text-slate-400">
            Messages sent to your vehicle will appear here.
          </p>
        </div>
      )}

      <div className="space-y-4">

        {messages?.map((item) => (
          <div
            key={item._id}
            className="border border-slate-200 rounded-2xl p-5 shadow-sm bg-white"
          >
            <div className="flex items-start justify-between gap-4">

              <div>
                <h3 className="font-bold text-primary text-lg">
                  {item.senderName || "Anonymous"}
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  Vehicle:
                  {" "}
                  {item?.vehicle?.vehicleMake}
                  {" "}
                  {item?.vehicle?.model}
                </p>

                <p className="text-slate-400 text-xs mt-1">
                  Plate:
                  {" "}
                  {item?.vehicle?.licensePlate}
                </p>
              </div>

              <span className="text-xs text-slate-400 whitespace-nowrap">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </div>

            <div className="mt-4 bg-slate-50 rounded-xl p-4">
              <p className="text-slate-700 leading-relaxed">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {messages?.length > 0 && (
        <div className="flex items-center justify-between mt-8">

          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-4 py-2 bg-buttonbg rounded text-white disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-bold text-primary">
            Page {page}
          </span>

          <button
            disabled={meta?.totalPages === page}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 bg-buttonbg rounded text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}