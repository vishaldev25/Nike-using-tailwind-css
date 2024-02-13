import { services } from "../constants"

import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map(each => (
        <ServiceCard key = {each.label} {...each}  />
      ))}

    </section>
  )
}

export default Services
