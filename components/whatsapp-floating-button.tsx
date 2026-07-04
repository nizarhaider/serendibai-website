'use client'

import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'

export default function WhatsAppFloatingButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="94742530708"
      accountName="SerendibAI"
      avatar="/apple-icon.png"
      statusMessage="AI call center demos"
      chatMessage={'Hi! Tell us what calls you want SerendibAI to handle, and we will help you book a demo.'}
      placeholder="Type your message..."
      messageDelay={1}
      allowClickAway
      allowEsc
      notification
      notificationDelay={20}
      notificationLoop={1}
      notificationSound={false}
      chatboxHeight={360}
      buttonStyle={{
        bottom: '1.5rem',
        right: '1.5rem',
        width: '64px',
        height: '64px',
        boxShadow: '0 18px 40px rgba(0, 0, 0, 0.22)',
      }}
      chatboxStyle={{
        right: '1.5rem',
        bottom: '6.75rem',
      }}
      whatsappButtonProps={{
        'aria-label': 'Chat with SerendibAI on WhatsApp',
      }}
    />
  )
}
