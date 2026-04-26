/**
 * JsonLd — renders a single Schema.org object as a JSON-LD <script> tag.
 * For multiple schemas use SchemaMarkup (passes an array).
 */
interface JsonLdProps {
  schema: Record<string, unknown>;
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
