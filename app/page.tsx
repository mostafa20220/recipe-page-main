import {
  ingredientsListItems,
  instructionsListItems,
  preparationTimeListItems,
  tableData,
} from "@/Data";
import List from "@/components/List";
import Section from "@/components/Section";
import Table from "@/components/Table";
import Container from "@/components/container";
import Image from "next/image";

export default function Home() {
  return (
    <Container className={"divide-y"}>
      <main className="flex flex-col">
        <Image
          className="mb-4 sm:rounded-[2rem] sm:p-4"
          src="/image-omelette.jpeg"
          alt="omelette image"
          width={10000}
          height={10000}
        />
        <Section
          title="Simple Omelette Recipe"
          titleColor="black"
          titleSize="4xl"
          description="An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats."
          className="space-y-8"
        >
          <Section
            title="Preparation time"
            titleColor="secondary"
            className="rounded-sm bg-[hsl(332,51%,32%)] bg-opacity-5 text-[var(--dark-raspberry)] sm:p-6"
          >
            <List items={preparationTimeListItems} />
          </Section>
        </Section>

        <Section className="p-0" title="Ingredients" titleSize="3xl">
          <List items={ingredientsListItems} listShape="square" />
        </Section>
      </main>

      <Section title="Instructions" titleSize="3xl">
        <List items={instructionsListItems} listShape="numbered" />
      </Section>

      <Section title="Nutrition" titleSize="3xl">
        <Table tableData={tableData} />
      </Section>
    </Container>
  );
}
