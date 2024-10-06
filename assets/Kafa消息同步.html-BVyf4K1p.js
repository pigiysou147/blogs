import{_ as s,c as i,o as a,b as n}from"./app-C58kMEDU.js";const e={},t=n(`<h3 id="kafka消息同步" tabindex="-1"><a class="header-anchor" href="#kafka消息同步"><span>Kafka消息同步</span></a></h3><p>Kafka 是一个高性能、可扩展且可靠的流处理平台。在 Kafka 中，生产者将消息发布到主题，消费者从主题中订阅并处理这些消息。为了实现数据的可靠性和一致性，通常需要在多个 Kafka 集群之间进行消息同步。</p><h4 id="消息同步的原理" tabindex="-1"><a class="header-anchor" href="#消息同步的原理"><span>消息同步的原理</span></a></h4><p>在 Kafka 中，消息同步通常指的是多个 Kafka 集群之间的消息复制。通过复制分区副本，Kafka 提高了数据的可靠性和可用性。当一个分区的副本被复制到其他集群时，便实现了跨数据中心的消息同步。</p><h4 id="消息同步的实现方式" tabindex="-1"><a class="header-anchor" href="#消息同步的实现方式"><span>消息同步的实现方式</span></a></h4><p>Kafka 提供了多种方式来实现消息同步，以下是一些常见的方法：</p><ol><li><p><strong>使用 MirrorMaker 进行消息复制</strong></p><p>MirrorMaker 是 Kafka 提供的工具，用于将一个 Kafka 集群中的消息复制到另一个集群。用户可以通过配置文件设置复制的主题、分区及源和目标集群。</p><p><strong>示例配置文件</strong>：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义源集群</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">source.cluster.zookeeper.connect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">zookeeper-source:2181</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">source.cluster.bootstrap.servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">kafka-source:9092</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义目标集群</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">target.cluster.zookeeper.connect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">zookeeper-target:2181</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">target.cluster.bootstrap.servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">kafka-target:9092</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义复制规则</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">replication.policy.class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">com.example.ReplicationPolicy</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">replication.policy.separator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">- </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">replication.policy.source.prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">my-topic</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">replication.policy.destination.prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">my-topic-replica</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用 MirrorMaker2 进行消息复制</strong></p><p>MirrorMaker2 是 Kafka 的另一个工具，支持跨数据中心的消息复制。与 MirrorMaker 不同，MirrorMaker2 能在复制过程中进行消息转换和过滤，例如将 JSON 消息转换为 Avro 格式，并过滤某些字段。</p><p><strong>示例配置文件</strong>：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义源集群</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">source.cluster.bootstrap.servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">kafka-source:9092</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">source.cluster.consumer.group.id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">mirror-maker-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义目标集群</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">target.cluster.bootstrap.servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">kafka-target:9092</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义复制规则</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">topics</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">my-topic</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">source.kafka.converter.class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">org.apache.kafka.connect.converters.ByteArrayConverter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">destination.kafka.converter.class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">org.apache.kafka.connect.converters.ByteArrayConverter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">source.cluster.alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">source</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">target.cluster.alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定义转换器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">transforms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">addPrefix,convertToJson</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">transforms.addPrefix.prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">target-</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">transforms.convertToJson.type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">org.apache.kafka.connect.transforms.JsonConverter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">transforms.convertToJson.schemas.enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用 Replicator 进行消息复制</strong></p><p>Replicator 是 Confluent 公司提供的工具，旨在将消息从一个 Kafka 集群复制到另一个集群，支持复杂的复制场景和高效的数据处理。</p></li></ol><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>通过使用 MirrorMaker、MirrorMaker2 和 Replicator，Kafka 能够实现跨集群的消息同步，确保数据的一致性和可靠性。这些工具提供了灵活的配置选项，适用于不同的业务需求。</p>`,9),l=[t];function r(p,k){return a(),i("div",null,l)}const d=s(e,[["render",r],["__file","Kafa消息同步.html.vue"]]),c=JSON.parse('{"path":"/posts/Kafa%E6%B6%88%E6%81%AF%E5%90%8C%E6%AD%A5.html","title":"","lang":"zh-CN","frontmatter":{"description":"Kafka消息同步 Kafka 是一个高性能、可扩展且可靠的流处理平台。在 Kafka 中，生产者将消息发布到主题，消费者从主题中订阅并处理这些消息。为了实现数据的可靠性和一致性，通常需要在多个 Kafka 集群之间进行消息同步。 消息同步的原理 在 Kafka 中，消息同步通常指的是多个 Kafka 集群之间的消息复制。通过复制分区副本，Kafka ...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/posts/Kafa%E6%B6%88%E6%81%AF%E5%90%8C%E6%AD%A5.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:description","content":"Kafka消息同步 Kafka 是一个高性能、可扩展且可靠的流处理平台。在 Kafka 中，生产者将消息发布到主题，消费者从主题中订阅并处理这些消息。为了实现数据的可靠性和一致性，通常需要在多个 Kafka 集群之间进行消息同步。 消息同步的原理 在 Kafka 中，消息同步通常指的是多个 Kafka 集群之间的消息复制。通过复制分区副本，Kafka ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T03:03:22.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:modified_time","content":"2024-10-06T03:03:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T03:03:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":3,"title":"Kafka消息同步","slug":"kafka消息同步","link":"#kafka消息同步","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1728183802000,"updatedTime":1728183802000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"posts/Kafa消息同步.md","localizedDate":"2024年10月6日","excerpt":"<h3>Kafka消息同步</h3>\\n<p>Kafka 是一个高性能、可扩展且可靠的流处理平台。在 Kafka 中，生产者将消息发布到主题，消费者从主题中订阅并处理这些消息。为了实现数据的可靠性和一致性，通常需要在多个 Kafka 集群之间进行消息同步。</p>\\n<h4>消息同步的原理</h4>\\n<p>在 Kafka 中，消息同步通常指的是多个 Kafka 集群之间的消息复制。通过复制分区副本，Kafka 提高了数据的可靠性和可用性。当一个分区的副本被复制到其他集群时，便实现了跨数据中心的消息同步。</p>\\n<h4>消息同步的实现方式</h4>\\n<p>Kafka 提供了多种方式来实现消息同步，以下是一些常见的方法：</p>","autoDesc":true}');export{d as comp,c as data};
