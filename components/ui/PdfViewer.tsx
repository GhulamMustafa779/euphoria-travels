"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface PdfViewerProps {
	pdfUrl: string;
	label?: string;
	/** "browser" = open in new tab (browser's native PDF viewer). "google" = open in modal using Google Docs viewer. */
	viewer?: "browser" | "google";
}

export default function PdfViewer({
	pdfUrl,
	label = "View PDF",
	viewer = "browser",
}: PdfViewerProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		document.addEventListener("keydown", handleEscape);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	// Browser viewer: open PDF in new tab (Chrome, Firefox, Safari native PDF viewer)
	if (viewer === "browser") {
		return (
			<a
				href={pdfUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block px-6 py-3 bg-orange text-white font-helvetica font-medium rounded-[30px] hover:opacity-90 transition-opacity"
			>
				{label}
			</a>
		);
	}

	// Google Docs viewer: embed in modal (PDF must be publicly accessible)
	const fullPdfUrl =
		typeof window !== "undefined"
			? `${window.location.origin}${pdfUrl.startsWith("/") ? "" : "/"}${pdfUrl}`
			: pdfUrl;
	const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`;

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="px-6 py-3 bg-orange text-white font-helvetica font-medium rounded-[30px] hover:opacity-90 transition-opacity"
			>
				{label}
			</button>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
					onClick={() => setIsOpen(false)}
					role="dialog"
					aria-modal="true"
					aria-label="PDF viewer"
				>
					<div
						className="relative flex flex-col bg-white rounded-[24px] w-full max-w-4xl h-[90vh] overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between p-4 border-b border-gray-200 shrink-0">
							<span className="text-indigo font-helvetica font-medium">{label}</span>
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="p-2 rounded-full hover:bg-gray-100 text-indigo transition-colors"
								aria-label="Close PDF viewer"
							>
								<X className="w-5 h-5" />
							</button>
						</div>
						<iframe
							src={googleViewerUrl}
							title="PDF document (Google viewer)"
							className="w-full flex-1 min-h-0 border-0"
						/>
					</div>
				</div>
			)}
		</>
	);
}
