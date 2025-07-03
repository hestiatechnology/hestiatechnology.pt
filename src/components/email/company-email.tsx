import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface InternalNotificationEmailProps {
  company: string;
  email: string;
  message: string;
}

const baseUrl = process.env.ASTRO_BASE_URL
  ? `
https://
${process.env.ASTRO_BASE_URL}
`
  : "";

export const InternalNotificationEmail = ({
  company,
  email,
  message,
}: InternalNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#003da5",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Preview>Novo Pedido de Contacto</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/public/HestiaTechnology.svg`}
            width="184"
            height="75"
            alt="Hestia"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8">
              Novo Pedido de Contacto
            </Heading>
            <Section>
              <Text className="text-base mt-6 mb-2">
                <strong>Empresa:</strong> {company}
              </Text>
              <Text className="text-base mb-2">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-base mb-2">
                <strong>Mensagem:</strong>
              </Text>
              <Text className="text-base whitespace-pre-line bg-gray-100 p-4 rounded">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default InternalNotificationEmail;
