// app/scan/[qrToken]/page.jsx
// Next.js App Router - SSR Page

import ScanModal from "@/components/ScanModal/ScanModal";


// SSR: fetch vehicle/owner data server-side
async function getVehicleData(qrToken) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${baseURL}qr/scan/${qrToken}`, {
      cache: 'no-store', // always fresh — SSR
    });
    console.log("res",res)

    if (!res.ok) {
      if (res.status === 404) return { error: 'not_found' };
      return { error: 'server_error' };
    }

    const json = await res.json();
    return { data: json.data };
  } catch (error){
    console.log("error",error)

    return { error: 'network_error' };
  }
}

export async function generateMetadata({ params }) {
  return {
    title: 'QR Park — Contact Vehicle Owner',
    description: 'Scan to contact this vehicle owner privately.',
  };
}

export default async function ScanPage({ params }) {
  const { qrToken } = await params;
  const result = await getVehicleData(qrToken);

  return <ScanModal result={result} qrToken={qrToken} />;
}