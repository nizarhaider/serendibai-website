import { MessageCircle } from 'lucide-react'

const whatsappNumber = '94742530708'
const whatsappMessage = encodeURIComponent(
  'Hi SerendibAI, I would like to book a demo.'
)

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SerendibAI on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
    </a>
  )
}
