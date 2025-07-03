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

interface ConfirmationEmailProps {
  clientName?: string;
}

const baseUrl = process.env.ASTRO_BASE_URL
  ? `
https://
${process.env.VERCEL_URL}
`
  : "";
export const ConfirmationEmail = ({ clientName }: ConfirmationEmailProps) => {
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
        <Preview>Confirmação de Submissão de Formulário</Preview>
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
              Obrigado pelo seu contacto!
            </Heading>
            <Section>
              <Text className="text-base mt-6 mb-4 text-center">
                {clientName ? `Olá ${clientName},` : "Olá,"}
              </Text>
              <Text className="text-base mb-4 text-center">
                Recebemos a sua submissão com sucesso. Agradecemos o seu
                interesse e entraremos em contacto consigo o mais breve
                possível.
              </Text>
              <Text className="text-base mb-4 text-center">
                Por favor, aguarde uma resposta da nossa equipa. Caso tenha
                alguma questão adicional, não hesite em responder a este email.
              </Text>
              <Text className="text-base text-center">
                Com os melhores cumprimentos,
                <br />
                Equipa Hestia
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ConfirmationEmail.PreviewProps = {
  clientName: "João",
} satisfies ConfirmationEmailProps;

export default ConfirmationEmail;
