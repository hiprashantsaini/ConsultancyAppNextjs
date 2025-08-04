import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for your project requirements',
};