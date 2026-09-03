import Container from "../ui/Container";
import process from "../../data/process";
import SectionHeader from "../ui/SectionHeader";

function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeader
          badge="Our Process"
          title="Simple, Reliable, Professional"
          description="From your first inquiry to the completion of the service, we follow a clear and efficient process."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl font-bold text-green-600">
                {item.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
