// KCNA Exam Set 3 - All 50 Questions
// Extracted from kcna-exam-set3.md

export const examSet3Questions = [
  {
    id: 1,
    questionNumber: 181,
    topic: "Cloud Native Management",
    question: "In a cloud native environment, who is usually responsible for maintaining the workloads running across the different platforms?",
    options: [
      "The cloud provider.",
      "The Site Reliability Engineering (SRE) team.",
      "The team of developers.",
      "The Support Engineering team (SE)."
    ],
    correct: 1,
    explanation: "In a cloud-native environment, the Site Reliability Engineering (SRE) team is typically responsible for maintaining workloads running across different platforms. SREs focus on the reliability, availability, performance, and operational health of systems."
  },
  {
    id: 2,
    questionNumber: 182,
    topic: "Kubernetes Deployment Strategies",
    question: "Which Kubernetes-native deployment strategy supports zero-downtime updates of a workload?",
    options: [
      "Canary",
      "Recreate",
      "BlueGreen",
      "RollingUpdate"
    ],
    correct: 3,
    explanation: "RollingUpdate is the Kubernetes-native deployment strategy that supports zero-downtime updates of a workload. It gradually updates Pod instances with new ones, ensuring that a sufficient number of old Pods remain available while new ones are being deployed."
  },
  {
    id: 3,
    questionNumber: 184,
    topic: "Cloud Native Applications",
    question: "What is a cloud native application?",
    options: [
      "It is a monolithic application that has been containerized and is running now on the cloud.",
      "It is an application designed to be scalable and take advantage of services running on the cloud.",
      "It is an application designed to run all its functions in separate containers.",
      "It is any application that runs in a cloud provider and uses its services."
    ],
    correct: 2,
    explanation: "A cloud-native application is typically designed to run all its functions in separate containers, often implemented as microservices. This architecture promotes loose coupling, scalability, and resilience."
  },
  {
    id: 4,
    questionNumber: 185,
    topic: "CNCF Governance",
    question: "What's the most adopted way of conflict resolution and decision-making for the open-source projects under the CNCF umbrella?",
    options: [
      "Financial Analysis",
      "Discussion and Voting",
      "Flipism Technique",
      "Project Founder Say"
    ],
    correct: 1,
    explanation: "For open-source projects under the CNCF umbrella, the most adopted way of conflict resolution and decision-making is through discussion and voting. This collaborative approach ensures that community input is considered."
  },
  {
    id: 5,
    questionNumber: 186,
    topic: "Kubernetes Garbage Collection",
    question: "Which of the following options include resources cleaned by the Kubernetes garbage collection mechanism?",
    options: [
      "Stale or expired CertificateSigning Requests (CSRs) and old deployments.",
      "Nodes deleted by a cloud controller manager and obsolete logs from the kubelet.",
      "Unused container and container images, and obsolete logs from the kubelet.",
      "Terminated pods, completed jobs, and objects without owner references."
    ],
    correct: 3,
    explanation: "Kubernetes garbage collection automatically cleans up certain resources that are no longer needed. This typically includes terminated Pods, completed Jobs, and objects without owner references."
  },
  {
    id: 6,
    questionNumber: 187,
    topic: "Node Management",
    question: "What is the default eviction timeout when the Ready condition of a node is Unknown or False?",
    options: [
      "Thirty seconds.",
      "Thirty minutes.",
      "One minute.",
      "Five minutes."
    ],
    correct: 3,
    explanation: "The default eviction timeout when the Ready condition of a node is Unknown or False is five minutes. If a node's readiness state becomes unhealthy, Kubernetes waits for a default period of five minutes before initiating the eviction of Pods from that node."
  },
  {
    id: 7,
    questionNumber: 188,
    topic: "Kubernetes Workloads",
    question: "What is the main purpose of a DaemonSet?",
    options: [
      "A DaemonSet ensures that all (or certain) nodes run a copy of a Pod.",
      "A DaemonSet ensures that the kubelet is constantly up and running.",
      "A DaemonSet ensures that there are as many pods running as specified in the replicas field.",
      "A DaemonSet ensures that a process (agent) runs on every node."
    ],
    correct: 0,
    explanation: "The main purpose of a DaemonSet is to ensure that all (or some specified) nodes in a Kubernetes cluster run a copy of a Pod. This is commonly used for deploying cluster-level daemons or agents that need to be present on every node."
  },
  {
    id: 8,
    questionNumber: 189,
    topic: "Container Orchestration",
    question: "Why do administrators need a container orchestration tool?",
    options: [
      "To manage the lifecycle of an elevated number of containers.",
      "To assess the security risks of the container images used in production.",
      "To learn how to transform monolithic applications into microservices.",
      "Container orchestration tools such as Kubernetes are the future."
    ],
    correct: 0,
    explanation: "Administrators need a container orchestration tool primarily to manage the lifecycle of an elevated number of containers. As the number of containers and microservices grows in a distributed system, manually managing their deployment, scaling, networking, and health becomes impractical."
  },
  {
    id: 9,
    questionNumber: 190,
    topic: "Pod Architecture",
    question: "Which two elements are shared between containers in the same pod?",
    options: [
      "Network resources and liveness probes.",
      "Storage and container image registry.",
      "Storage and network resources.",
      "Network resources and Dockerfiles."
    ],
    correct: 2,
    explanation: "Containers within the same Kubernetes Pod share network resources (same network namespace and IP address) and storage resources (shared volumes defined within the Pod)."
  },
  {
    id: 10,
    questionNumber: 191,
    topic: "Kubernetes API Versioning",
    question: "In Kubernetes, if the API version of feature is `v2beta3`, it means that:",
    options: [
      "The version will remain available for all future releases within a Kubernetes major version.",
      "The API may change in incompatible ways in a later software release without notice.",
      "The software is well tested. Enabling a feature is considered safe.",
      "The software may contain bugs. Enabling a feature may expose bugs."
    ],
    correct: 1,
    explanation: "Beta versions in Kubernetes are well-tested but may still contain bugs. More importantly, the API may change in incompatible ways in a later software release without notice. While breaking changes are less frequent than in alpha, they are still possible."
  },
  {
    id: 11,
    questionNumber: 192,
    topic: "Metrics Server",
    question: "What is the API that exposes resource metrics from the metrics-server?",
    options: [
      "custom.k8s.io",
      "resources.k8s.io",
      "metrics.k8s.io",
      "cadvisor.k8s.io"
    ],
    correct: 2,
    explanation: "The Metrics Server exposes resource metrics (CPU and memory utilization) for Pods and Nodes through the metrics.k8s.io API. This API is used by the Horizontal Pod Autoscaler (HPA) and kubectl top to gather resource usage information."
  },
  {
    id: 12,
    questionNumber: 193,
    topic: "Kubernetes Workloads",
    question: "Which of the following resources helps in managing a stateless application workload on a Kubernetes cluster?",
    options: [
      "DaemonSet",
      "StatefulSet",
      "kubectl",
      "Deployment"
    ],
    correct: 3,
    explanation: "A Deployment is the primary Kubernetes resource for managing stateless application workloads. Deployments manage ReplicaSets, which ensure a specified number of identical Pod replicas are running."
  },
  {
    id: 13,
    questionNumber: 194,
    topic: "Kubernetes Autoscaling",
    question: "Which mechanism can be used to automatically adjust the amount of resources for an application?",
    options: [
      "Horizontal Pod Autoscaler (HPA)",
      "Kubernetes Event-driven Autoscaling (KEDA)",
      "Cluster Autoscaler",
      "Vertical Pod Autoscaler (VPA)"
    ],
    correct: 3,
    explanation: "The Vertical Pod Autoscaler (VPA) is used to automatically adjust the amount of resources (CPU and memory requests/limits) for individual containers within Pods based on their historical and real-time usage."
  },
  {
    id: 14,
    questionNumber: 195,
    topic: "Security",
    question: "Which of the following is a recommended security habit in Kubernetes?",
    options: [
      "Run the containers as the user with group ID 0 (root) and any user ID.",
      "Disallow privilege escalation from within a container as the default option.",
      "Run the containers as the user with user ID 0 (root) and any group ID.",
      "Allow privilege escalation from within a container as the default option."
    ],
    correct: 1,
    explanation: "A recommended security habit in Kubernetes is to disallow privilege escalation from within a container as the default option. This is a critical security measure to prevent a compromised container from gaining higher privileges on the host system."
  },
  {
    id: 15,
    questionNumber: 196,
    topic: "Observability",
    question: "What are the 3 pillars of Observability?",
    options: [
      "Metrics, Logs, and Traces",
      "Metrics, Logs, and Spans",
      "Metrics, Data, and Traces",
      "Resources, Logs, and Tracing"
    ],
    correct: 0,
    explanation: "The three pillars of observability are: Metrics (numerical data points collected over time), Logs (timestamped records of discrete events), and Traces (end-to-end journey of a request through different services)."
  },
  {
    id: 16,
    questionNumber: 197,
    topic: "Service Mesh",
    question: "What edge and service proxy tool is designed to be integrated with cloud native applications?",
    options: [
      "CoreDNS",
      "CNI",
      "gRPC",
      "Envoy"
    ],
    correct: 3,
    explanation: "Envoy is a high-performance open-source edge and service proxy designed for cloud-native applications. It is often used as a sidecar proxy in service mesh architectures to handle traffic management, load balancing, observability, and security."
  },
  {
    id: 17,
    questionNumber: 198,
    topic: "GitOps",
    question: "What is Flux constructed with?",
    options: [
      "GitLab Environment Toolkit",
      "GitOps Toolkit",
      "Helm Toolkit",
      "GitHub Actions Toolkit"
    ],
    correct: 1,
    explanation: "Flux, a popular GitOps continuous delivery tool for Kubernetes, is constructed with the GitOps Toolkit. The GitOps Toolkit is a set of composable APIs and specialized tools that form the foundation of Flux."
  },
  {
    id: 18,
    questionNumber: 199,
    topic: "Kubernetes Services",
    question: "In Kubernetes, which abstraction defines a logical set of Pods and a policy by which to access them?",
    options: [
      "Service Account",
      "NetworkPolicy",
      "Service",
      "Custom Resource Definition"
    ],
    correct: 2,
    explanation: "In Kubernetes, a Service is an abstraction that defines a logical set of Pods and a policy by which to access them. Services enable network access to a group of Pods, providing a stable IP address and DNS name."
  },
  {
    id: 19,
    questionNumber: 133,
    topic: "OCI Runtime",
    question: "What is the reference implementation of the OCI runtime specification?",
    options: [
      "lxc",
      "cri-o",
      "runc",
      "docker"
    ],
    correct: 2,
    explanation: "runc is the reference implementation of the OCI (Open Container Initiative) runtime specification. It is a lightweight, portable container runtime that provides a standardized way to run containers."
  },
  {
    id: 20,
    questionNumber: 134,
    topic: "Kubernetes Services",
    question: "What is a Service?",
    options: [
      "A static network mapping from a Pod to a port.",
      "A way to expose an application running on a set of Pods.",
      "The network configuration for a group of Pods.",
      "An NGINX load balancer that gets deployed for an application."
    ],
    correct: 1,
    explanation: "In Kubernetes, a Service is an abstraction that defines a logical set of Pods and a policy by which to access them. Services provide a stable endpoint to access a group of Pods, even as the underlying Pods are created, destroyed, or rescheduled."
  },
  {
    id: 21,
    questionNumber: 135,
    topic: "Security",
    question: "What's the difference between a security profile and a security context?",
    options: [
      "Security Contexts configure Clusters and Namespaces at runtime. Security profiles are control plane mechanisms to enforce specific settings in the Security Context.",
      "Security Contexts configure Pods and Containers at runtime. Security profiles are control plane mechanisms to enforce specific settings in the Security Context.",
      "Security Profiles configure Pods and Containers at runtime. Security Contexts are control plane mechanisms to enforce specific settings in the Security Profile.",
      "Security Profiles configure Clusters and Namespaces at runtime. Security Contexts are control plane mechanisms to enforce specific settings in the Security Profile."
    ],
    correct: 1,
    explanation: "Security Contexts define the security settings for a Pod or Container at runtime. Security Profiles (such as Pod Security Standards) are control plane mechanisms that enforce specific security settings by validating or mutating a Pod's Security Context."
  },
  {
    id: 22,
    questionNumber: 136,
    topic: "Distributed Tracing",
    question: "At which layer would distributed tracing be implemented in a cloud native deployment?",
    options: [
      "Network",
      "Application",
      "Database",
      "Infrastructure"
    ],
    correct: 1,
    explanation: "Distributed tracing is implemented primarily at the application layer in a cloud-native deployment. It involves instrumenting application code to capture trace data, propagate trace context across service boundaries, and send trace data to a tracing backend."
  },
  {
    id: 23,
    questionNumber: 137,
    topic: "Authentication",
    question: "What framework does Kubernetes use to authenticate users with JSON Web Tokens?",
    options: [
      "OpenID Connect",
      "OpenID Container",
      "OpenID Cluster",
      "OpenID CNCF"
    ],
    correct: 0,
    explanation: "Kubernetes can use OpenID Connect (OIDC) to authenticate users with JSON Web Tokens (JWTs). OIDC is an identity layer built on top of the OAuth 2.0 protocol, allowing Kubernetes to validate JWTs issued by an OIDC-compliant identity provider."
  },
  {
    id: 24,
    questionNumber: 138,
    topic: "Kubernetes Features",
    question: "Which of the following is a feature Kubernetes provides by default as a container orchestration tool?",
    options: [
      "A portable operating system.",
      "File system redundancy.",
      "A container image registry.",
      "Automated rollouts and rollbacks."
    ],
    correct: 3,
    explanation: "As a container orchestration tool, Kubernetes provides automated rollouts and rollbacks by default. Deployments manage the process of updating applications by gradually replacing old Pods with new ones and can revert to a previous stable version if issues occur."
  },
  {
    id: 25,
    questionNumber: 139,
    topic: "Container Runtime",
    question: "Which of the following sentences is true about container runtimes in Kubernetes?",
    options: [
      "If you let iptables see bridged traffic, you don't need a container runtime.",
      "If you enable IPv4 forwarding, you don't need a container runtime.",
      "Container runtimes are deprecated, you must install CRI on each node",
      "You must install a container runtime on each node to run pods on it."
    ],
    correct: 3,
    explanation: "You must install a container runtime on each node to run Pods on it. The container runtime is the software component responsible for actually running and managing containers on a node. The kubelet interacts with this runtime via the Container Runtime Interface (CRI)."
  },
  {
    id: 26,
    questionNumber: 140,
    topic: "Pod States",
    question: "If a Pod was waiting for container images to download on the scheduled node, what state would it be in?",
    options: [
      "Failed",
      "Succeeded",
      "Unknown",
      "Pending"
    ],
    correct: 3,
    explanation: "When a Pod is waiting for container images to be downloaded (pulled) to the scheduled node, it will be in the Pending state. The Pending state indicates that the Pod has been accepted by the Kubernetes system, but one or more of its containers have not yet been started."
  },
  {
    id: 27,
    questionNumber: 143,
    topic: "Semantic Versioning",
    question: "Imagine you're releasing open-source software for the first time. Which of the following is a valid semantic version?",
    options: [
      "1.0",
      "2021-10-11",
      "0.1.0-rc",
      "v1beta1"
    ],
    correct: 2,
    explanation: "Semantic Versioning follows the format MAJOR.MINOR.PATCH with optional pre-release identifiers. 0.1.0-rc is a valid semantic version, indicating a release candidate for a 0.1.0 version, which is typical for early releases where the API might not be stable yet."
  },
  {
    id: 28,
    questionNumber: 151,
    topic: "Service Mesh",
    question: "Which of the following scenarios would benefit the most from a service mesh architecture?",
    options: [
      "A few applications with hundreds of pod replicas running in multiple clusters, each one providing multiple services.",
      "Thousands of distributed applications running in a single cluster, each one providing multiple services.",
      "Tens of distributed applications running in multiple clusters, each one providing multiple services.",
      "Thousands of distributed applications running in multiple clusters, each one providing multiple services."
    ],
    correct: 3,
    explanation: "A service mesh architecture is most beneficial in scenarios with high complexity and scale: thousands of distributed applications running in multiple clusters, each providing multiple services. This level of complexity creates significant challenges in traffic management, security, observability, and resilience."
  },
  {
    id: 29,
    questionNumber: 155,
    topic: "Storage",
    question: "Manual reclamation policy of a PVC resource is known as:",
    options: [
      "claimRef",
      "Delete",
      "Retain",
      "Recycle"
    ],
    correct: 2,
    explanation: "The manual reclamation policy is known as Retain. When a PersistentVolumeClaim is deleted, the PV and its underlying storage resource are not deleted; they remain in place. An administrator must manually reclaim or reuse the volume and its data."
  },
  {
    id: 30,
    questionNumber: 157,
    topic: "Security Tools",
    question: "Which one of the following is an open source runtime security tool?",
    options: [
      "lxd",
      "containerd",
      "falco",
      "gvisor"
    ],
    correct: 2,
    explanation: "Falco is an open-source runtime security tool designed to monitor and detect anomalous behavior in containerized environments. It provides runtime security by analyzing system calls and other events, using customizable rules to detect suspicious activities."
  },
  {
    id: 31,
    questionNumber: 161,
    topic: "Container Policies",
    question: "Which of these is a valid container restart policy?",
    options: [
      "On login",
      "On update",
      "On start",
      "On failure"
    ],
    correct: 3,
    explanation: "OnFailure is a valid container restart policy in Kubernetes. The three valid restart policies are: Always (always restart), OnFailure (restart only if it exits with a non-zero status), and Never (never restart)."
  },
  {
    id: 32,
    questionNumber: 162,
    topic: "Cloud Native Challenges",
    question: "Which of the following is a challenge derived from running cloud native applications?",
    options: [
      "The operational costs of maintaining the data center of the company.",
      "The cost optimization is complex to maintain across different public cloud environments.",
      "The lack of different container images available in public image repositories.",
      "The lack of services provided by the most common public clouds"
    ],
    correct: 1,
    explanation: "One significant challenge derived from running cloud-native applications, especially when deployed across multiple public cloud environments, is the complexity of cost optimization. Managing and optimizing spending in dynamic, highly distributed, and often multi-cloud native environments can be intricate."
  },
  {
    id: 33,
    questionNumber: 163,
    topic: "Kubernetes Architecture",
    question: "What is the correct hierarchy of Kubernetes components?",
    options: [
      "Containers → Pods → Cluster → Nodes",
      "Nodes → Cluster → Containers → Pods",
      "Cluster → Nodes → Pods → Containers",
      "Pods → Cluster → Containers → Nodes"
    ],
    correct: 2,
    explanation: "The correct hierarchy of Kubernetes components from a top-down view is: Cluster (the entire Kubernetes cluster) → Nodes (physical or virtual machines) → Pods (smallest deployable units) → Containers (individual processes running inside Pods)."
  },
  {
    id: 34,
    questionNumber: 164,
    topic: "Kubernetes Secrets",
    question: "Which statement about Secrets is correct?",
    options: [
      "A Secret is part of a Pod specification.",
      "Secrets data is encrypted with the cluster private key by default.",
      "Secrets data is base64 encoded and stored unencrypted by default",
      "A Secret can only be used for confidential data"
    ],
    correct: 2,
    explanation: "The correct statement about Kubernetes Secrets is that Secrets data is base64 encoded and stored unencrypted by default. It's crucial to understand that base64 encoding is not encryption; it's a reversible encoding scheme."
  },
  {
    id: 35,
    questionNumber: 165,
    topic: "Kubernetes API Extension",
    question: "Which mechanism allows extending the Kubernetes API?",
    options: [
      "ConfigMap",
      "CustomResource Definition",
      "MutatingAdmissionWebhookmechamsm",
      "Kustomize"
    ],
    correct: 1,
    explanation: "The primary mechanism for extending the Kubernetes API is through CustomResource Definitions (CRDs). CRDs allow users to define their own custom resources and their schema, effectively extending the Kubernetes API with new object types."
  },
  {
    id: 36,
    questionNumber: 166,
    topic: "Observability",
    question: "Which of the following observability data streams would be most useful when desiring to plot resource consumption and predicted future resource exhaustion?",
    options: [
      "stdout",
      "Traces",
      "Logs",
      "Metrics"
    ],
    correct: 3,
    explanation: "When desiring to plot resource consumption and predict future resource exhaustion, Metrics are the most useful observability data stream. Metrics are numerical measurements collected over time, ideal for performance monitoring, capacity planning, and predicting resource needs."
  },
  {
    id: 37,
    questionNumber: 167,
    topic: "Kubernetes Jobs",
    question: "What can be used to create a job that will run at specified times/dates or on a repeating schedule?",
    options: [
      "Job",
      "Calender.Job",
      "BatchJob",
      "CronJob"
    ],
    correct: 3,
    explanation: "A CronJob is the Kubernetes object specifically designed to create jobs that will run at specified times/dates or on a repeating schedule. It uses a cron format to define the schedule for executing tasks."
  },
  {
    id: 38,
    questionNumber: 168,
    topic: "Troubleshooting",
    question: "If kubectl is failing to retrieve information from the cluster, where can you find pod logs to troubleshoot?",
    options: [
      "/var/log/pods/",
      "~/.kube/config",
      "/var/log/k8s/",
      "/etc/kubernetes/"
    ],
    correct: 0,
    explanation: "If kubectl is failing to retrieve information, you would typically look at the underlying node for logs. Pod logs are usually stored on the node where the Pod is running, often under the directory /var/log/pods/."
  },
  {
    id: 39,
    questionNumber: 169,
    topic: "Kubernetes Scheduler",
    question: "Which component in Kubernetes is responsible to watch newly created Pods with no assigned node, and selects a node for them to run on?",
    options: [
      "etcd",
      "kube controller-manager",
      "kube proxy",
      "kube scheduler"
    ],
    correct: 3,
    explanation: "The kube-scheduler is the Kubernetes component responsible for watching newly created Pods that have no assigned node. It then selects an optimal node for them to run on, considering factors like resource requirements, policies, and affinity rules."
  },
  {
    id: 40,
    questionNumber: 170,
    topic: "Node Controller",
    question: "Which control plane component is responsible for updating the node Ready condition if a node becomes unreachable?",
    options: [
      "The kube-oroxy.",
      "The node controller.",
      "The kubelct.",
      "The kube-apiserver"
    ],
    correct: 1,
    explanation: "The node controller (part of the kube-controller-manager) is the control plane component responsible for updating the node Ready condition if a node becomes unreachable. It monitors the health of nodes and detects node failures."
  },
  {
    id: 41,
    questionNumber: 171,
    topic: "GitOps Workflows",
    question: "Which GitOps engine can be used to orchestrate parallel jobs on Kubernetes?",
    options: [
      "Jenkins X",
      "Flagger",
      "Flux",
      "Argo Workflows"
    ],
    correct: 3,
    explanation: "Argo Workflows is an open-source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It allows you to define workflows as a sequence of steps with complex DAG dependencies, making it suitable for orchestrating machine learning pipelines and data processing."
  },
  {
    id: 42,
    questionNumber: 172,
    topic: "Open Container Initiative",
    question: "What is the main purpose of the Open Container Initiative (OCI)?",
    options: [
      "Accelerating the adoption of containers and Kubernetes in the industry.",
      "Creating open industry standards around container formats and runtimes.",
      "Creating industry standards around container formats and runtimes for private purposes.",
      "Improving the security of standards around container formats and runtimes"
    ],
    correct: 1,
    explanation: "The main purpose of the Open Container Initiative (OCI) is to create open industry standards around container formats and runtimes. The OCI aims to ensure that container technologies are interoperable and portable across different vendors and platforms."
  },
  {
    id: 43,
    questionNumber: 173,
    topic: "Service Mesh Features",
    question: "Which are the core features provided by a service mesh?",
    options: [
      "Authentication and authorization",
      "Distributing and replicating data",
      "Security vulnerability scanning",
      "Configuration management"
    ],
    correct: 0,
    explanation: "Core features provided by a service mesh include traffic management, observability, and security (including authentication and authorization). Service meshes provide mutual TLS between services, policy enforcement, and access control."
  },
  {
    id: 44,
    questionNumber: 174,
    topic: "Kubernetes Objects",
    question: "Which of the following options include only mandatory fields to create a Kubernetes object using a YAML file?",
    options: [
      "apiVersion, template, kind, status",
      "apiVersion, metadata, status, spec",
      "apiVersion, template, kind, spec",
      "apiVersion, metadata, kind, spec"
    ],
    correct: 3,
    explanation: "To create any Kubernetes object using a YAML file, the mandatory top-level fields are: apiVersion (specifies the Kubernetes API version), kind (specifies the type of object), metadata (contains object metadata), and spec (describes the desired state)."
  },
  {
    id: 45,
    questionNumber: 175,
    topic: "Container Orchestration",
    question: "Which of the following is the name of a container orchestration software?",
    options: [
      "OpenStack",
      "Docker",
      "Apache Mesos",
      "CRI-O"
    ],
    correct: 2,
    explanation: "Apache Mesos is a distributed systems kernel that can be used for resource management and also supports container orchestration. While Kubernetes is the dominant container orchestrator today, Apache Mesos was a notable container orchestration software."
  },
  {
    id: 46,
    questionNumber: 176,
    topic: "Node Failure",
    question: "What happens with a regular pod running in Kubernetes when a node fails?",
    options: [
      "A new pod with the same UID is scheduled to another node after a while.",
      "A new, near-identical pod but with different UID is scheduled to another node.",
      "By default, a pod can only be scheduled to the same node when the node fails.",
      "A new pod is scheduled on a different node only if it is configured explicitly."
    ],
    correct: 1,
    explanation: "When a node fails, if the Pod was managed by a controller (like a Deployment), that controller will create a new Pod (which will have a different UID) and the scheduler will attempt to schedule it on a healthy node."
  },
  {
    id: 47,
    questionNumber: 177,
    topic: "etcd High Availability",
    question: "What is the minimum of etcd members that are required for a highly available Kubernetes cluster?",
    options: [
      "Two etcd members.",
      "Five etcd members.",
      "Six etcd members.",
      "Three etcd members"
    ],
    correct: 3,
    explanation: "For a highly available etcd cluster, a minimum of three etcd members is required. etcd uses a Raft-based consensus algorithm, which requires a quorum (majority) of members to agree on decisions. For 3 members, a quorum is 2."
  },
  {
    id: 48,
    questionNumber: 178,
    topic: "Kubernetes Ingress",
    question: "What is the main purpose of the Ingress in Kubernetes?",
    options: [
      "Access HTTP and HTTPS services running in the cluster based on their IP address.",
      "Access services different from HTTP or HTTPS running in the cluster based on their IP address.",
      "Access services different from HTTP or HTTPS running in the cluster based on their path",
      "Access HTTP and HTTPS services running in the cluster based on their path."
    ],
    correct: 3,
    explanation: "The main purpose of Ingress in Kubernetes is to manage external access to HTTP and HTTPS services within a cluster. It provides HTTP and HTTPS routing to services based on rules defined by hostnames, paths, or other criteria."
  },
  {
    id: 49,
    questionNumber: 179,
    topic: "API Extension",
    question: "How can you extend the Kubernetes API?",
    options: [
      "Adding a Custom Resource Definition or implementing an aggregation layer.",
      "Adding a new version of a resource, for instance v4beta3.",
      "With the command kubectl extend api, logged in as an administrator.",
      "Adding the desired API object as a kubelet parameter"
    ],
    correct: 0,
    explanation: "The Kubernetes API can be extended in two primary ways: Custom Resource Definitions (CRDs) - the most common way, allowing users to define custom resources; and API Aggregation Layer - allowing you to extend the Kubernetes API with a custom API server."
  },
  {
    id: 50,
    questionNumber: 180,
    topic: "Ephemeral Containers",
    question: "What is an ephemeral container?",
    options: [
      "A specialized container that runs as root for infosec applications.",
      "A specialized container that runs temporarily in an existing Pod.",
      "A specialized container that extends and enhances the 'main' container in a Pod",
      "A specialized container that run before app container in a Pod"
    ],
    correct: 1,
    explanation: "An ephemeral container is a specialized container type in Kubernetes that runs temporarily in an existing Pod. They are typically used for interactive troubleshooting, debugging, or inspecting a running Pod's environment without restarting or altering its primary application containers."
  }
];

export default examSet3Questions;